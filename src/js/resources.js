import {ImageSource, Sound, Resource, Loader} from 'excalibur'
import mandoImage from '../images/mando.png'
import groundImage from '../images/ground.png'
import rockImage from '../images/rock.png'
import backgroundImage from '../images/background.png'
import stormtrooperImage from '../images/stormtrooper.png'
import ceilingImage from '../images/ceiling.png'
import probedroidImage from '../images/probedroid.png'

const Resources = {
    Mando: new ImageSource(mandoImage),
    Ground: new ImageSource(groundImage),
    Rock: new ImageSource(rockImage),
    Background: new ImageSource(backgroundImage),
    Stormtrooper: new ImageSource(stormtrooperImage),
    Ceiling: new ImageSource(ceilingImage),
    Probedroid: new ImageSource(probedroidImage),
}

// met deze for loop hoef je niet alles handmatig in de loader te zetten
const resourceArray = []
for (const key in Resources) {
    resourceArray.push(Resources[key])
}
const ResourceLoader = new Loader(resourceArray)
export { Resources, ResourceLoader }