This is a hosted database app that has different countries around the world and foods that represent them.

To start these containers you can run:

`docker compose up --build`

---

To stop these container you can run:

`docker compose down`

---

To start your containers in the background, you can run:

`docker compose up -d --build`

---

To see all running containers you can run:

`docker ps`

---

To stop a specific container you can run:

`docker stop <CONTAINER ID>`


---

Route names:

`/` or `/index`  ---> home page
`/query`  ---> country search page
`/list`  ---> all countries in the database page
`/upload`  ---> add a new country to the database page
`/country`  ---> creates country object in database
`/countries`  ---> performs the query

---

Query examples:

In the query/search page, enter a country name to see a food that represents it 
	e.g. Thailand
		URL: https://jcollins.cs382.net/countries?name=Thailand
	e.g. Brazil
		URL: https://jcollins.cs382.net/countries?name=Brazil