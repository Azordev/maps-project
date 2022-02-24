import { useMutation } from '@apollo/client'
import { INSERT_ERRORS_MUTATION } from '../services/GraphQl'

/**
 * @callback insertErrors receive three params
 * @param type
 * @param location
 * @param error
 *  to use => insertErrors({"type": type, "error":error",location": location})
 */
export function InsertErrors() {
  const [insertErrors, { loading, error, data }] = useMutation(INSERT_ERRORS_MUTATION)
  if (error) {
    console.error(error)
  }
  return { insertErrors, loading, error, data }
}
