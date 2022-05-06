import { createServer} from 'miragejs';

function mockServer() {
  let server = createServer(
      {
        routes() {
            this.urlPrefix = "https://www.testdomain.com";
            this.namespace = "/v1/api";
            this.timing = 5000;

            this.get("/books", () => {
                return [
                    {
                        title: "MajomA",
                        author: "Hakapeszi",
                        year: 1985
                    },
                    {
                        title: "MajomB",
                        author: "HakapesziB",
                        year: 1986
                    },
                    {
                        title: "MajomC",
                        author: "HakapesziC",
                        year: 1987
                    }
                ]
            });
        }
      }
  );

  return server
}

export default mockServer
