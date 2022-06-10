import Prem from './images/topTenLeagues/League/39-min.png'
import Ligue1 from './images/topTenLeagues/League/61-min.png'
import SerieA from './images/topTenLeagues/League/135-min.png'
import Bundesliga from './images/topTenLeagues/League/78-min.png'
import LaLiga from './images/topTenLeagues/League/140-min.png'
import MLS from './images/topTenLeagues/League/866-min.png'

import England from './images/topTenLeagues/Country/39.svg'
import France from './images/topTenLeagues/Country/61.svg'
import Italy from './images/topTenLeagues/Country/71.svg'
import Germany from './images/topTenLeagues/Country/78.svg'
import Spain from './images/topTenLeagues/Country/140.svg'
import USA from './images/topTenLeagues/Country/866.svg'

const topLeagues = [
    {
        "id": 39,
        "league": {
            "name": "Premier League",
            "logo": Prem
        },
        "country": {
            "name": "England",
            "logo": England
        }
    },
    {
        "id": 140,
        "league": {
            "name": "La Liga",
            "logo": LaLiga
        },
        "country": {
            "name": "Spain",
            "logo": Spain
        }
    },
    {
        "id": 61,
        "league": {
            "name": "Ligue 1",
            "logo": Ligue1
        },
        "country": {
            "name": "France",
            "logo": France
        }
    },
    {
        "id": 135,
        "league": {
            "name": "Serie A",
            "logo": SerieA
        },
        "country": {
            "name": "Italy",
            "logo": Italy
        }
    },
    {
        "id": 866,
        "league": {
            "name": "Major League Soccer",
            "logo": MLS
        },
        "country": {
            "name": "USA",
            "logo": USA
        }
    },
    {
        "id": 78,
        "league": {
            "name": "Bundesliga",
            "logo": Bundesliga
        },
        "country": {
            "name": "Germany",
            "logo": Germany
        }
    },
]

export default topLeagues