import { InsertErrors } from '../hooks'

export const logError = ({ error, codeLocation, type }) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error(error)
  } else {
    const params = {
      location: codeLocation,
      error: error.message,
      type: type,
    }

    const { insertErrors } = InsertErrors()

    // @ts-ignore
    insertErrors({ params })
      .then(res => {
        const errorId = res.data.insert_errors.returning[0]
        return errorId
      })
      // eslint-disable-next-line no-console
      .catch(err => console.error(err))
  }
}
