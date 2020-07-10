import React from 'react'
import classes from '../GeneralStyles.module.css'

const pets = [
  {
    key: 1,
    isDog: true,
    image: 'https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313__340.jpg'
  },
  {
    key: 2,
    isDog: false,
    image: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/reference_guide/cats_and_excessive_meowing_ref_guide/1800x1200_cats_and_excessive_meowing_ref_guide.jpg'
  },
  {
    key: 3,
    isDog: true,
    image: 'https://image.cnbcfm.com/api/v1/image/105992231-1561667465295gettyimages-521697453.jpeg?v=1561667497&w=678&h=381'
  },
  {
    key: 4,
    isDog: false,
    image: 'https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1136638860%2F960x0.jpg%3Ffit%3Dscale'
  },
];

const style = {
  width: '100%',
  border: '2px solid grey',
}

const Dog = (props) => {
  return (
    <div>
      <img style={style} src={props.image} />
    </div>
  )

}

const Cat = (props) => <img style={style} src={props.image} />

const Pet = ({ isDog, image }) => {
  return (
    <div className={classes.atimal_image}>
      {isDog ? <Dog image={image} /> : <Cat image={image} />}
    </div>
  )
}

// class AnimalContainer extends React.Component {
//   render() {
//     return(
//       <div>
//         <Animals />
//       </div>
//     )
//   }
// }

class Animals extends React.Component {
  state = {
    pets: [],
    petsTypes: [],
    isFetching: true
  }
  componentDidMount() {
    this.setState({
      pets,
      petsTypes: pets,
      isFetching: false
    })
  }

  getAllAnimals = () => {
    let petsTypes = [...this.state.pets]
    this.setState({
      petsTypes
    })
  }

  getDogs = () => {
    let petsTypes = [...this.state.pets]
    let dogs = petsTypes.filter(pets=> pets.isDog ? pets : null)
    this.setState({
      petsTypes: dogs
    })
  }

  getCats = () => {
    let petsTypes = [...this.state.pets]
    let cats = petsTypes.filter(pets=> pets.isDog ? null : pets)
    this.setState({
      petsTypes: cats
    })
  }


  render() {
    return (

      <div className={classes.animal}>
        {this.state.isFetching ? <div>...Loading</div> :
          <div>
            <div className={classes.container}>
              <h2>Welcome to the world of pets</h2>
            </div>

            { /*
             Loop over array of pets and pass them as props into Pet*/}
            <div className={classes.animal_items}>
              {this.state.petsTypes.map(pet => <Pet {...pet} key={pet.key} />)}
            </div>
            <div className={classes.animal_controls}>
              <button onClick={this.getAllAnimals} >All pets</button>
              <button onClick={this.getDogs} >Only dogs</button>
              <button onClick={this.getCats} >Only cats</button>
            </div>

          </div>}


      </div>
    )
  }
}

export default Animals;
