// O finally simplesmente executa após o try-catch independentemente do resultado
// É isso, ele simplesmente executa!

const psycho = 'vinicius'
// let psycho = 'vinicius'

try {
    psycho = 'Raquel'
    console.log('Psycho assign triumphantly!')
} catch (error) {
    console.error(error);
} finally {
    console.log('This block will be executed regardless result!')
}