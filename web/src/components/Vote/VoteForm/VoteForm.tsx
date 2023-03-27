import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

import type { EditVoteById, UpdateVoteInput } from 'types/graphql'
import type { RWGqlError } from '@redwoodjs/forms'

type FormVote = NonNullable<EditVoteById['vote']>

interface VoteFormProps {
  vote?: EditVoteById['vote']
  onSave: (data: UpdateVoteInput, id?: FormVote['id']) => void
  error: RWGqlError
  loading: boolean
}

const VoteForm = (props: VoteFormProps) => {
  const onSubmit = (data: FormVote) => {
    props.onSave(data, props?.vote?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form<FormVote> onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>

        <TextField
          name="userId"
          defaultValue={props.vote?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="userId" className="rw-field-error" />

        <Label
          name="recipeId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Recipe id
        </Label>

        <TextField
          name="recipeId"
          defaultValue={props.vote?.recipeId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="recipeId" className="rw-field-error" />

        <Label
          name="vote"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Vote
        </Label>

        <NumberField
          name="vote"
          defaultValue={props.vote?.vote}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="vote" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default VoteForm
