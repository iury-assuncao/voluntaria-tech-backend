import { ValidationError } from 'class-validator';

export function formatValidationErrors(errors: ValidationError[]): {
  errors: { field: string; errors: string[] }[];
} {
  return {
    errors: errors.map((err) => ({
      field: err.property,
      errors: Object.values(err.constraints || {}),
    })),
  };
}
