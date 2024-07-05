import { useEffect, useState } from "react"
import { api } from "../config"
import { FormInterface } from "../interfaces/form.interface"

function Home() {
  const [data, setData] = useState<FormInterface[]>([])

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
            <form key={formDomain.id} action={`/form/${formDomain.formDomain.id}`} method="post">
              <h1>{formDomain.formDomain.title}</h1>
              {
                formDomain.formDomain.fields.map((field) => {
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
