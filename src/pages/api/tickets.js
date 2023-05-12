// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const types = {
  WENT_WELL: 'wentWell',
  TO_IMPROVE: 'toImprove',
  KUDOS: 'kudos'
}

export default function handler(req, res) {
  res.status(200).json(
    [
      {
        _id: 1,
        type: types.KUDOS,
        description: 'Fix unit test',
        likes: 3,
        comments: [
          {
            _id: 1,
            user: 1,
            text: 'I like unit test!'
          }
        ]
      },
      {
        _id: 2,
        type: types.WENT_WELL,
        description: 'Nice work on the BE!',
        likes: 5,
        comments: [
          {
            _id: 2,
            user: 2,
            text: 'Algun comentario'
          }
        ]
      },
      {
        _id: 3,
        type: types.TO_IMPROVE,
        description: 'Functional tests keep breaking',
        likes: 2,
        comments: [
          {
            _id: 3,
            user: 4,
            text: 'Algun comentario 2'
          }
        ]
      },
      {
        _id: 4,
        type: types.TO_IMPROVE,
        description: 'hola',
        likes: 2,
        comments: [
          {
            _id: 4,
            user: 3,
            text: 'hola'
          }
        ]
      }
    ]
  )
}
