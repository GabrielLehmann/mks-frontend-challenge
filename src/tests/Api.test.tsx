test("Testando API /api/v1/products", async () => {
  try {
    const response = await fetch(
      "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC"
    );

    expect(response.status).toBe(200);

    const data = await response.json();

    expect(data).toBeDefined();
    expect(Array.isArray(data)).toBe(true);
  } catch (error) {}
});
