export const fetchData = async () => {
    const apiKey = process.env.API_KEY;
    const endpoint = `http://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}`;
    const data = await fetch(endpoint)
        .then(res => res.json())
        .then(data => [data.base, ...Object.keys(data.rates)])
        .catch((e) => {console.log(e)});
        return data;
}
