const { ApolloServer  }   = require("apollo-server");
const { ApolloGateway }   = require("@apollo/gateway");

(async () => {
	try {
		const { schema, executor } = await new ApolloGateway({
			serviceList: require('./servicelist.json'),
		})
		.load();

		new ApolloServer({ schema, executor })
  		.listen(process.env.PORT || 3200)
  		.then(({ url }) => {
			console.log(`Server ready at ${url}`);
  		});
	}
	catch(e) {
		console.error(e);
	}
})()

