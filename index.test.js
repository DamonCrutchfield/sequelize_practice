const {sequelize} = require('./db');
const {Restaurant, Customer} = require('./index')



describe('Restaurant', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a restaurant', async () => {
        const restaurant = await Restaurant.create({ name: 'Be Our Guest', image: 'https://disneyworld.disney.go.com/dining/magic-kingdom/be-our-guest-restaurant/', theme:'Beauty and the Beast' })
        expect(restaurant.id).toBe(1)
    })

    test('customers can place an order', async () => {
		const testCustomer = await Customer.create({name: 'Mickey Mouse', order: "Mickey Waffles"});
		expect(testCustomer.order).toBe('Mickey Waffles');
	})

	test('restaurants have a theme', async() => {
		const testRestaurant = await Restaurant.create({name : 'AMC® Disney Springs 24 Dine-In Theatres', image : 'https://disneyworld.disney.go.com/entertainment/disney-springs/amc-disney-springs-24/', theme: "None"})
		expect(testRestaurant.theme).toBe('None')
	})

	test('restaurants can have many customers', async () => {
		const disneyRestaurant = await Restaurant.create({name : 'BTS', theme : 'Pop'})

		const tarzan = await Customer.create({name : 'Tarzan', order : 'Bannana Pudding'});
		const jane = await Customer.create({name : 'Jane', order : 'Hanger Steak'});
		const aladdin = await Customer.create({name : 'Aladdin', order : 'Mansaf' });
		const jasmine = await Customer.create({name : 'Jasmine', order : 'Knafeh'});

		await disneyRestaurant.addCustomer(tarzan) //addCustomer is a 'magic method' we get from Sequelize, once we declare an association
		await disneyRestaurant.addCustomer(jane)
		await disneyRestaurant.addCustomer(aladdin)
		await disneyRestaurant.addCustomer(jasmine)

		const customers = await disneyRestaurant.getCustomers() // another association 'magic method'

		expect(customers.length).toBe(4)
		expect(customers[0] instanceof Customer).toBeTruthy
    })
})
