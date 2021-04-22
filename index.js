/*
Modify object that is returned by "photoGallery" function using:
1. Shorthand property names
2. Shorthand method names
3. Computed property names. You need to add one computed property.

Also correct all mistakes.

Log messages in the console must be exactly the same as at the end of this challenge.
*/
//Old code!
// const photoGallery = (title, dimensions, date) => {
//   return {
//     title: title,
//     info: function() {
//       console.log(
//         "Dimenstions of the foto "${title}" are ${date}`
//       );
//     },
//     dimensions: dimensions
//     publishInfo: () => {
//       console.log(
//         `Foto was published ${Math.floor(
//           (new Date().getTime() - date.getTime()) / 1000
//         )} seconds ago`
//       );
//     ,
//     date: date
//   };
// };

// const photo1 = photoGallery(
//   "My dog",
//   "1920x1080",
//   new Date()
// );


///New modified code
const photoGallery = (title, dimensions, date) => {
  return {
    title: title,
    [dimensions] : true,
    info() {
      console.log(
        `Dimenstions of the foto "${title}" are ${date}`
      );
    },
    dimensions: dimensions,
    publishInfo () {
      console.log(
        `Foto was published ${Math.floor(
          (new Date().getTime() - date.getTime()) / 1000
        )} seconds ago`
      );},
    
 date: date
  
};
}

const photo1 = photoGallery(
  "My dog",
  "1920x1080",
  new Date()
);

const testDimension1 = "1920x1080";
const testDimension2 = "1080x720";

photo1.info();
/* Dimenstions of the foto "My dog" are 1920x1080 */

setTimeout(() => photo1.publishInfo(), 2000);
/* Foto "My dog" was published 2 seconds ago */

/* QUESTION: Why "publishInfo" method still has access to the parameters (for example "date") of the "photoGallery" function? */
// Answer / beceasue they are both in the same scope/

console.log(photo1[testDimension1]); // true
console.log(photo1[testDimension2]); // undefined