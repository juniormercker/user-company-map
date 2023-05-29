import { User } from './User';
import { Company } from './Company';
import { Map } from './Map';

const company = new Company()
const user = new User()

const mapDiv = document.getElementById("map") as HTMLElement
const map = new Map(mapDiv)

map.addMarker(user)
map.addMarker(company)

