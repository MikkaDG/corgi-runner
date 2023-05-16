import {ImageSource, Sound, Resource, Loader} from 'excalibur'
import corgiImage from '../images/corgi.png'
import groundImage from '../images/ground.png'

const Resources = {
    Corgi: new ImageSource(corgiImage),
    Ground: new ImageSource(groundImage)
}
const ResourceLoader = new Loader([
    Resources.Corgi,
    Resources.Ground
])

export {Resources, ResourceLoader}