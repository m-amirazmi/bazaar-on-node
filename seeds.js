// const mongoose = require("mongoose");
// const Food = require("./models/Food");

// const data = [
//   {
//     foodImage:
//       "https://lamanresepi.com/wp-content/uploads/2017/01/Resepi-Nasi-Ayam.jpg",
//     foodName: "Nasi Ayam",
//     foodPrice: "RM3.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 1,
//   },
//   {
//     foodImage:
//       "https://dishbyili.com/wp-content/uploads/2019/08/Edited-Post-2-1140x700.jpeg",
//     foodName: "Chicken Chop",
//     foodPrice: "RM13.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 2,
//   },
//   {
//     foodImage:
//       "https://cdn.rasa.my/wp-content/uploads/2017/09/Untitled-design-2-2.jpg",
//     foodName: "Nasi Arab Mandy",
//     foodPrice: "RM21.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 3,
//   },
//   {
//     foodImage:
//       "https://www.simplyrecipes.com/wp-content/uploads/2011/04/civil-war-mac-cheese-horiz-a-1800.jpg",
//     foodName: "Nasi Ayam",
//     foodPrice: "RM37.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 4,
//   },
//   {
//     foodImage:
//       "https://cdn.tasteatlas.com/images/dishes/7be259cbce8d442dba511da533c750af.jpg?w=600&h=450",
//     foodName: "Nasi Kerabu",
//     foodPrice: "RM7.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 5,
//   },
//   {
//     foodImage:
//       "https://img-global.cpcdn.com/recipes/1db41d3d3f990c04/751x532cq70/tembikai-laici-lemon-resipi-foto-utama.jpg",
//     foodName: "Tembikai Laici",
//     foodPrice: "RM1.90",
//     foodDesc:
//       "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quidem, nesciunt distinctio autem illo modi nulla consequuntur alias numquam commodi!",
//     foodId: 6,
//   },
// ];

// module.exports = function seed() {
//   // Remove all foods
//   Food.remove({}, (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("removed foods");
//     data.forEach((seed) => {
//       Food.create(seed, (err, food) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log("added a food");
//           food.save();
//         }
//       });
//     });
//   });
// };
