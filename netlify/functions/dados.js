exports.handler = async function () {

  const FORM_ID = process.env.FORM_ID;
  const API_KEY = process.env.API_KEY;

  try {

    const response = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${FORM_ID}/values/A:Z?key=${API_KEY}`
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Erro ao buscar dados" })
    };

  }
};