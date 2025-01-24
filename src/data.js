import yoga from './assets/yoga.jpg'
import fitness from './assets/fitness.jpg'
import martial from './assets/martial.jpg'
import mental from './assets/mind.jpg'
import physical from './assets/physical.jpg'
import creative from './assets/creative.jpg'
import personal from './assets/personal.jpg'
import technical from './assets/technical.jpg'
import speaking from './assets/speaking.jpg'

//assuming dummy data to implement requried functionalities
export const services = [
    {
        name: 'Yoga',
        desc: 'Power yoga, Restorative yoga, Vinyasa yoga',
        category: 'Fitness Classes',
        image: yoga,
        price: 20,
        rating: 3.5,
    },
    {
        name: 'Cardio & Strength',
        desc: 'HIIT,Spin Classes,Bodyweight Training',
        category: 'Fitness Classes',
        image: fitness,
        price: 25,
        rating: 3.6,
    },
    {
        name: 'Specialized Fitness',
        desc: 'Zumba Pilates Martial Arts(e.g., Taekwondo, Kickboxing)',
        category: 'Fitness Classes',
        image: martial,
        price: 30,
        rating: 4.0,
    },
    {
        name: 'Mental Health',
        desc: 'Cognitive, Behavioral Therapy (CBT), Art Therapy',
        category: 'Therapy Sessions',
        image: mental,
        price: 22,
        rating: 3.8,
    },
    {
        name: 'Physical Therapy',
        desc: 'Post-injury, Rehabilitation, Sports Therapy',
        category: 'Therapy Sessions',
        image: physical,
        price: 15,
        rating: 3.2,
    },
    {
        name: 'Personal Development',
        desc: 'Time Management Skills, Public Speaking',
        category: 'Personal Development',
        image: personal,
        price: 21,
        rating: 3.8,
    },
    {
        name: 'Creative Skills',
        desc: 'Painting and Drawing, Photography Basics',
        category: 'Personal Development',
        image: creative,
        price: 24,
        rating: 3.6,
    },
    {
        name: 'Technical Skills',
        desc: 'Coding Bootcamps, DIY Electronics',
        category: 'Personal Development',
        image: technical,
        price: 28,
        rating: 3.9,
    },
    {
        name: 'Language Learning',
        desc: 'Spanish for Beginners, Conversational French',
        category: 'Educational Programs',
        image: speaking,
        price: 25,
        rating: 3.6,
    },
]