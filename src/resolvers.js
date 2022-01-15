const { GraphQLUpload } = require("graphql-upload");
const { extname } = require("path");
const { v4: uuid } = require("uuid");
const s3 = require("./s3");
require("dotenv").config();

module.exports = {
  Upload: GraphQLUpload,

  Mutation: {
    uploadAvatar: async (_, { file }) => {
      const { createReadStream, filename, mimetype, encoding } =
        await file;

      console.log(process.env.AWS_S3_BUCKET);

      const { Location } = await s3
        .upload({
          Bucket: process.env.AWS_S3_BUCKET,
          Body: createReadStream(),
          Key: `${uuid()}${extname(filename)}`,
          ContentType: mimetype,
        })
        .promise();

      return {
        filename,
        mimetype,
        encoding,
        uri: Location,
      };
    },
  },
};
