
export async function getPres(req, res) {
    try {
        const presName = req.params.name
        console.log('presName server controller', presName)
        const pres = await presService.getByName(presName)
        console.log('pres server controller', pres)
        res.sent(pres)
    }
    catch (err) {
        res.status(400).send({ err: ' Failed to get pres' })
    }
}