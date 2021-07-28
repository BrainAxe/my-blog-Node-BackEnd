const { object, string } = require('yup');

const payload = {
  body: object({
    title: string().required('Title is required'),
    content: string()
      .required('Content is required')
      .min(120, 'Content body is too short - should be 120 chars minimum.')
  })
};

const params = {
  params: object({
    postId: string().required('postId is required')
  })
};

const createPostSchema = object({
  ...payload
});

const updatePostSchema = object({
  ...params,
  ...payload
});

const deletePostSchema = object({
  ...params
});

module.exports = { createPostSchema, updatePostSchema, deletePostSchema };
