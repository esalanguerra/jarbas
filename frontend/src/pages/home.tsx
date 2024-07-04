import { useEffect, useState } from "react"
import { api } from "../config"

interface FieldsInterface {
  id: number
  title: string
  placeholder: string
  type: string
}

interface FormInterface {
  id: number
  title: string
  fields: FieldsInterface[]
}

interface FormDomainInterface {
  id: number
  form: FormInterface
  redirectId: number
}

function Home() {
  const [data, setData] = useState<FormDomainInterface[]>([])

  useEffect(() => {
    api.get("/forms").then((response) => {
      setData(response.data)
    })
  }, [])

  return (
    <>
      {
        data.map((formDomain) => {
          return (
            <form key={formDomain.id} action={`/form/${formDomain.form.id}`} method="post">
              <h1>{formDomain.form.title}</h1>
              {
                formDomain.form.fields.map((field) => {
                  return (
                    <div key={field.id}>
                      <label htmlFor={field.title}>{field.title}</label>
                      <input type={field.type} id={field.title} name={field.title} placeholder={field.placeholder} />
                    </div>
                  )
                })
              }
              <button type="submit">Enviar</button>
            </form>
          )
        })
      }
    </>
  )
}

export default Home
