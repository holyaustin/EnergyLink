const prompt = args[0]
const today = new Date()
const formattedDate = date.toISOString().split("T")[0]

if (!secrets.ecoverseKey) {
    throw Error("Need to set ECOVERSE_API_KEY environment variable")
}

const eletricityPricesRequest = Functions.makeHttpRequest({
    url: `https://vcegi07.inesctec.pt/core/api/omie/pagination?limit=1&offset=0&date=${formattedDate}&database_type=postgres`,
    method: "GET",
    headers: {
        Authorization: `Bearer ${secrets.ecoverseKey}`,
    },
    data: {},
})

const energyTariffsRequest = Functions.makeHttpRequest({
    url: `https://vcegi07.inesctec.pt/core/api/erse_tariffs/be98f56d-d9c6-4c48-a73a-1ed80a953237/2023-01-01`,
    method: "GET",
    headers: {
        Authorization: `Bearer ${secrets.ecoverseKey}`,
    },
    data: {},
})

const eletricityPricesResponse = await Promise.all([eletricityPricesRequest])
const energyTariffsResponse = await Promise.all([energyTariffsRequest])
console.log("prices raw response", eletricityPricesResponse)
console.log("tariffs raw response", energyTariffsResponse)

const result = {
    prices: eletricityPricesResponse.data[0],
    tariffs: energyTariffsResponse.data[0],
}
return result
