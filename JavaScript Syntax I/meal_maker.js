
/* Meal Maker 
As a frequent diner, you love trying out new restaurants and experimenting with different foods. 
However, having to figure out what you want to order can be a time-consuming ordeal if the menu is big, 
and you want an easier way to be able to figure out what you are going to eat.

In this project, you’ll use JavaScript to randomly create a three-course meal based on what is available on a menu. We’ll keep running it until we’re satisfied with the generated meal!
*/

const menu = {
    _courses : {
      appetizers : [],
      mains : [],
      desserts : []
    },
    get appetizers(){
      return this._courses.appetizers
    },
    get mains(){
      return this._courses.mains
    },
    get desserts(){
      return this._courses.desserts
    },
  
    set appetizers(appetizers){
      this._courses.appetizers = appetizers
    },
    set mains(mains){
      this._courses.mains = mains
    },
    set desserts(desserts){
      this._courses.desserts = desserts
    },
    get courses(){
      return {
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts
      };
    },
    addDishToCourse(courseName,dishName,dishPrice){
      const dish = {
        name : dishName,
        price : dishPrice
      };
      return this._courses[courseName].push(dish)
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}, The price is ${totalPrice}.`;
    }
  };
  

  // Testing the program
  menu.addDishToCourse('appetizers', 'Sushi Rolls', 1.25);
  menu.addDishToCourse('appetizers', 'Caesar Salad', 1.95);
  menu.addDishToCourse('appetizers', 'Chicken Salad', 2.00);
  menu.addDishToCourse('appetizers', 'Soup', 2.25);
  
  
  menu.addDishToCourse('mains', 'Fried Rice', 11.05);
  menu.addDishToCourse('mains', 'Fried Potatoes', 8.50);
  menu.addDishToCourse('mains', 'Pork Fried Rice', 12.30);
  menu.addDishToCourse('mains', 'Spaghetti', 7.35);
  
  menu.addDishToCourse('desserts', 'Coca Cola', 1.10);
  menu.addDishToCourse('desserts', 'Ice Cream', 1.00);
  menu.addDishToCourse('desserts', 'Cake', 3.00);
  menu.addDishToCourse('desserts', 'Coffee', 1.25);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);
  
  
  