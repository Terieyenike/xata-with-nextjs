import { getXataClient } from "@/xata"

const handler = async (request, response) => {
  const xata = await getXataClient()

  const { email } = request.body

  await xata.db.details.create({
    email
  })

  response.end()
}

export default handler
