interface FieldsInterface {
  id: number
  title: string
  placeholder: string
  type: string
}

interface FormDomainInterface {
  id: number
  title: string
  fields: FieldsInterface[]
}

interface FormInterface {
  id: number
  formDomain: FormDomainInterface
  redirectId: number
}

export { FormInterface, FormDomainInterface, FieldsInterface }
