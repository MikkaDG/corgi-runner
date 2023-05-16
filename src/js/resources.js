import {ImageSource, Sound, Resource, Loader} from 'excalibur'
import corgiImage from '../images/corgi.png'
import groundImage from '../images/ground.png'
import rockImage from '../images/rock.png'

const Resources = {
    Corgi: new ImageSource(corgiImage),
    Ground: new ImageSource(groundImage),
    Rock: new ImageSource(rockImage)
}
const ResourceLoader = new Loader([
    Resources.Corgi,
    Resources.Ground,
    Resources.Rock
])

export {Resources, ResourceLoader}