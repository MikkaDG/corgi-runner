import { ImageSource, Sound, Resource, Loader } from 'excalibur'
import corgiImage from '../images/corgi.png'

const Resources = {
    Corgi: new ImageSource(corgiImage)
}
const ResourceLoader = new Loader([Resources.Corgi])

export { Resources, ResourceLoader }