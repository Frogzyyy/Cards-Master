export enum Extensions{
  //BASE EDITIONS
  ALPHA = 'ALPHA',
  BETA = 'Limited Edition Beta',
  UNLIMITED = 'Unlimited Edition',
  REVISED = 'Revised Edition',
  FOURTH = 'Fourth Edition',
  FITH = 'Fith Edition',
  SIXTH = 'Classic Sixth Edition',
  SEVENTH = 'Seventh Edition',
  EIGHTH = 'Eighth Edition',
  NINTH = 'Ninth Edition',
  TENTH = 'Tenth Edition',
  MTG2010 = 'Magic 2010',
  MTG2011 = 'Magic 2011',
  MTG2012 = 'Magic 2012',
  MTG2013 = 'Magic 2013',
  MTG2014 = 'Magic 2014',
  MTG2015 = 'Magic 2015',
  ORIGINS = 'Magic Origins',
  CORESET2019 = 'Core Set 2019',
  CORESET2020 = 'Core Set 2020',
  CORESET2021 = 'Core Set 2021',

  //EXTENSION SETS
  //OLD TIMES
  ARABIANNIGHTS = 'Arabian Nights',
  ANTIQUITIES = 'Antiquities',
  LEGENDS = 'Legends',
  THEDARK = 'The Dark',
  FALLENEMPIRES = 'Fallen Empires',
  //ICE AGE
  ICEAGE = 'Ice Age',
  HOMELANDS = 'Homelands',
  ALLIANCES = 'Alliances',
  COLDSNAP = 'Coldsnap',
  //MIRAGE
  MIRAGE = 'Mirage',
  VISIONS = 'Visions',
  WEATHERLIGHT = 'Weatherlight',
  //TEMPEST
  TEMPEST = 'Tempest',
  STRONGHOLD = 'Stronghold',
  EXODUS = 'Exodus',
  //URZA
  URZASSAGA = 'Urza\'s saga',
  URZASLEGACY = 'Urza\'s Legacy',
  URZASDESTINY = 'Urza\'s Destiny',
  //MASQUES
  MERCADIANMASQUES = 'Mercadian Masques',
  NEMESIS = 'Nemesis',
  PROPHECY = 'Prophecy',
  //INVASION
  INVASION = 'Invasion',
  PLANESHIFT = 'Planeshift',
  APOCALYPSE = 'Apocalypse',
  //ODYSSEY
  ODYSSEY = 'Odyssey',
  TORMENT = 'Torment',
  JUDGEMENT = 'Judgement',
  //ONSLAUGHT
  ONSLAUGHT = 'Onslaught',
  LEGIONS = 'Legions',
  SCOURGE = 'Scourge',
  //MIRRODIN
  MIRRODIN = 'Mirrodin',
  DARKSTEEL = 'Darksteel',
  FITHDAWN = 'Fith Dawn',
  //KAMIGAWA
  CHAMPIONSKAMIGAWA = 'Champions of Kamigawa',
  BETRAYERSKAMIGAWA = 'Betrayers of Kamigawa',
  SAVIORSKAMIGAWA = 'Saviors of Kamigawa',
  //RAVNICA
  RAVNICA = 'Ravnica : City of Guilds',
  GUILDPACT = 'Guildpact',
  DISSENSION = 'Dissension',
  //TIME SPIRAL
  TIMESPIRAL = 'Time Spiral',
  PLANARCHAOS = 'Planar Chaos',
  FUTURESIGHT = 'Future Sight',
  //LORWYN
  LORWYN = 'Lorwyn',
  MORNINGTIDE = 'Morningtide',
  //SHADOWMOOR
  SHADOWMOOR = 'Shadowmoor',
  EVENTIDE = 'Eventide',
  //ALARA
  SHARDSALARA = 'Shards of Alara',
  CONFLUX = 'Conflux',
  ALARAREBORN = 'Alara Reborn',
  //ZENDIKAR
  ZENDIKAR = 'Zendikar',
  WORLDWAKE = 'Worldwake',
  RISEOFELDRAZI = 'Rise of the Eldrazi',
  //SCARS OF MIRRODIN
  SCARSOFMIRRODIN = 'Scars of Mirrodin',
  MIRRODINBESIEGED = 'Mirrodin Besieged',
  NEWPHYREXIA = 'New Phyrexia',
  //INNISTRAD
  INNISTRAD = 'Innistrad',
  DARKASCENSION = 'Dark Ascension',
  AVACYNRESTORED = 'Avacyn Restored',
  //RETURN TO RAVNICA
  RETURNTORAVNICA = 'Return to Ravnica',
  GATECRASH = 'Gatecrash',
  DRAGONSMAZE = 'Dragon\'s Maze',
  //THEROS
  THEROS = 'Theros',
  BORNOFTHEGODS = 'Born of the Gods',
  JOURNEYINTONYX = 'Journey into Nyx',
  //KHANS OF TARKIR
  KHANSOFTARKIR = 'Khans of Tarkir',
  FATEREFORGED = 'Fate Reforged',
  DRAGONSOFTARKIR = 'Dragons of Tarkir',
  //BATTLE FOR ZENDIKAR
  BATTLEFORZENDIKAR = 'Battle for Zendikar',
  OATHOFTHEGATEWATCH = 'Oath of the Gatewatch',
  //SHADOWS OVER INNISTRAD
  SHADOWSOVERINNISTRAD = 'Shadows Over Innistrad',
  ELDRITCHMOON = 'Eldritch Moon',
  //KALADESH
  KALADESH = 'Kaladesh',
  AETHERREVOLT = 'Aether Revolt',
  //AMONKHET
  AMONKHET = 'Amonkhet',
  HOUROFDEVASTATION = 'Hour of Devastation',
  //IXALAN
  IXALAN = 'Ixalan',
  RIVALSOFIXALAN = 'Rivals of Ixalan',
}

export interface ICardExtension{
  block : string,
  name : string,
  iconURL : string,
  year : number
}

export const CardExtension : {[key:string]:ICardExtension} = {

  //ADDING BASE SETS TO DICTIONNARY

  [Extensions.ALPHA] : { block:'Base Edition', name : 'Limited Edition Alpha', iconURL : 'alpha.png', year : 1993 },
  [Extensions.BETA] : { block:'Base Edition', name : 'Limited Edition Beta', iconURL : 'beta.png', year : 1993 },
  [Extensions.UNLIMITED] : { block:'Base Edition', name : 'Unlimited Edition', iconURL : 'unlimited.png', year : 1993 },
  [Extensions.REVISED] : { block:'Base Edition', name : 'Revised Edition', iconURL : 'revised.png', year : 1994 },
  [Extensions.FOURTH] : { block:'Base Edition', name : 'Fourth Edition', iconURL : 'fourth.png', year : 1995 },
  [Extensions.FITH] : { block:'Base Edition', name : 'Fith Edition', iconURL : 'fith.png', year : 1997 },
  [Extensions.SIXTH] : { block:'Base Edition', name : 'Sixth Edition', iconURL : 'sixth.png', year : 1999 },
  [Extensions.SEVENTH] : { block:'Base Edition', name : 'Seventh Edition', iconURL : 'seventh.png', year : 2001 },
  [Extensions.EIGHTH] : { block:'Base Edition', name : 'Eighth Edition', iconURL : 'eighth.png', year : 2003 },
  [Extensions.NINTH] : { block:'Base Edition', name : 'Ninth Edition', iconURL : 'ninth.png', year : 2005 },
  [Extensions.TENTH] : { block:'Base Edition', name : 'Tenth Edition', iconURL : 'tenth.png', year : 2007 },
  [Extensions.MTG2010] : { block:'Base Edition', name : 'Magic 2010', iconURL : 'mtg2010.png', year : 2009 },
  [Extensions.MTG2011] : { block:'Base Edition', name : 'Magic 2011', iconURL : 'mtg2011.png', year : 2010 },
  [Extensions.MTG2012] : { block:'Base Edition', name : 'Magic 2012', iconURL : 'mtg2012.png', year : 2011 },
  [Extensions.MTG2013] : { block:'Base Edition', name : 'Magic 2013', iconURL : 'mtg2013.png', year : 2012 },
  [Extensions.MTG2014] : { block:'Base Edition', name : 'Magic 2014', iconURL : 'mtg2014.png', year : 2013 },
  [Extensions.MTG2015] : { block:'Base Edition', name : 'Magic 2015', iconURL : 'mtg2015.png', year : 2014 },
  [Extensions.ORIGINS] : { block:'Base Edition', name : 'Magic Origins', iconURL : 'origins.png', year : 2015 },
  [Extensions.CORESET2019] : { block:'Base Edition', name : 'Core Set 2019', iconURL : 'mtg2019.png', year : 2018 },
  [Extensions.CORESET2020] : { block:'Base Edition', name : 'Core Set 2020', iconURL : 'mtg2020.png', year : 2019 },
  [Extensions.CORESET2021] : { block:'Base Edition', name : 'Core Set 2021', iconURL : 'mtg2021.png', year : 2020 },


  //ADDING EXTENSION SETS TO DICTIONNARY
    //OLD TIMES
  [Extensions.ARABIANNIGHTS] : { block : 'Old Times', name : 'Arabian Nights' ,iconURL : 'arabian-nights.png', year : 1993 },
  [Extensions.ANTIQUITIES] : { block : 'Old Times', name : 'Antiquities' , iconURL : 'antiquities.png', year : 1994 },
  [Extensions.LEGENDS] : { block : 'Old Times', name : 'Legends', iconURL : 'legends.png', year : 1994 },
  [Extensions.THEDARK] : { block : 'Old Times', name : 'The Dark', iconURL : 'the-dark.png', year : 1994 },
  [Extensions.FALLENEMPIRES] : { block : 'Old Times', name : 'Fallen Empires', iconURL : 'fallen-empires.png', year : 1994},

    //ICE AGE
  [Extensions.ICEAGE] : { block : 'Ice Age', name : 'Ice Age', iconURL : 'ice-age.png', year : 1995 },
  [Extensions.HOMELANDS] : { block : 'Ice Age', name : 'Homelands', iconURL : 'homelands.png', year : 1995 },
  [Extensions.ALLIANCES] : { block : 'Ice Age', name : 'Alliances', iconURL : 'alliances.png', year : 1996 },
  [Extensions.COLDSNAP] : { block : 'Ice Age', name : 'Coldsnap', iconURL : 'coldsnap.png', year : 2006 },

  //MIRAGE
  [Extensions.MIRAGE] : { block : 'Mirage', name : 'Mirage', iconURL : 'mirage.png', year : 1996 },
  [Extensions.VISIONS] : { block : 'Mirage', name : 'Visions', iconURL : 'visions.png', year : 1997 },
  [Extensions.WEATHERLIGHT] : { block : 'Mirage', name : 'Weatherlight', iconURL : 'weatherlight.png', year : 1997 },

  //TEMPEST
  [Extensions.TEMPEST] : { block : 'Tempest', name : 'Tempest', iconURL : 'tempest.png', year : 1997 },
  [Extensions.STRONGHOLD] : { block : 'Tempest', name : 'Stronghold', iconURL : 'stronghold.png', year : 1998 },
  [Extensions.EXODUS] : { block : 'Tempest', name : 'Exodus', iconURL : 'exodus.png', year : 1998 },

  //URZA'S BLOCK
  [Extensions.URZASSAGA] : { block : 'Urza\'s Block', name : 'Urza\'s Saga', iconURL : 'urza-saga.png', year : 1998 },
  [Extensions.URZASLEGACY] : { block : 'Urza\'s Block', name : 'Urza\'s Legacy', iconURL : 'urza-legacy.png', year : 1999 },
  [Extensions.URZASDESTINY] : { block : 'Urza\'s Block', name : 'Urza\'s Destiny', iconURL : 'urza-destiny.png', year : 1999 },

  //MASQUES
  [Extensions.MERCADIANMASQUES] : { block : 'Masques', name : 'Mercadian Masques', iconURL : 'mercadian-masques.png', year : 1999 },
  [Extensions.NEMESIS] : { block : 'Masques', name : 'Nemesis', iconURL : 'nemesis.png', year : 2000 },
  [Extensions.PROPHECY] : { block : 'Masques', name : 'Prophecy', iconURL : 'prophecy.png', year : 2000 },

  //INVASION
  [Extensions.INVASION] : { block : 'Invasion', name : 'Invasion', iconURL : 'invasion.png', year : 2000 },
  [Extensions.PLANESHIFT] : { block : 'Invasion', name : 'Planeshift', iconURL : 'planeshift.png', year : 2001 },
  [Extensions.APOCALYPSE] : { block : 'Invasion', name : 'Apocalypse', iconURL : 'apocalypse.png', year : 2001 },

  //ODYSSEY
  [Extensions.ODYSSEY] : { block : 'Odyssey', name : 'Odyssey', iconURL : 'odyssey.png', year : 2001 },
  [Extensions.TORMENT] : { block : 'Odyssey', name : 'Torment', iconURL : 'torment.png', year : 2002 },
  [Extensions.JUDGEMENT] : { block : 'Odyssey', name : 'Judgement', iconURL : 'judgement.png', year : 2002 },

  //ONSLAUGHT
  [Extensions.ONSLAUGHT] : { block : 'Onslaught', name : 'Onslaught', iconURL : 'onslaught.png', year : 2002 },
  [Extensions.LEGIONS] : { block : 'Onslaught', name : 'Legions', iconURL : 'legions.png', year : 2003 },
  [Extensions.SCOURGE] : { block : 'Onslaught', name : 'Scourge', iconURL : 'scourge.png', year : 2003 },

  //MIRRODIN
  [Extensions.MIRRODIN] : { block : 'Mirrodin', name : 'Mirrodin', iconURL : 'mirrodin.png', year : 2003 },
  [Extensions.DARKSTEEL] : { block : 'Mirrodin', name : 'Darksteel', iconURL : 'darksteel.png', year : 2004 },
  [Extensions.FITHDAWN] : { block : 'Mirrodin', name : 'Fith Dawn', iconURL : 'fith-dawn.png', year : 2004 },

  //KAMIGAWA
  [Extensions.CHAMPIONSKAMIGAWA] : { block : 'Kamigawa', name : 'Champions of Kamigawa', iconURL : 'champions-kamigawa.png', year : 2004 },
  [Extensions.BETRAYERSKAMIGAWA] : { block : 'Kamigawa', name : 'Betrayers of Kamigawa', iconURL : 'betrayers-kamigawa.png', year : 2005 },
  [Extensions.SAVIORSKAMIGAWA] : { block : 'Kamigawa', name : 'Saviors of Kamigawwa', iconURL : 'saviors-kamigawa.png', year : 2005 },

  //RAVNICA
  [Extensions.RAVNICA] : { block : 'Ravnica', name : 'Ravnica', iconURL : 'ravnica.png', year : 2005 },
  [Extensions.GUILDPACT] : { block : 'Ravnica', name : 'Guildpact', iconURL : 'guildpact.png', year : 2006 },
  [Extensions.DISSENSION] : { block : 'Ravnica', name : 'Dissension', iconURL : 'dissension.png', year : 2006 },

  //TIME SPIRAL
  [Extensions.TIMESPIRAL] : { block : 'Time Spiral', name : 'Time Spiral', iconURL : 'time-spiral.png', year : 2006 },
  [Extensions.PLANARCHAOS] : { block : 'Time Spiral', name : 'Planar Chaos', iconURL : 'planar-chaos.png', year : 2007 },
  [Extensions.FUTURESIGHT] : { block : 'Time Spiral', name : 'Future Sight', iconURL : 'future-sight.png', year : 2007 },

  //LORWYN
  [Extensions.LORWYN] : { block : 'Lorwyn', name : 'Lorwyn', iconURL : 'lorwyn.png', year : 2007 },
  [Extensions.MORNINGTIDE] : { block : 'Lorwyn', name : 'Morningtide', iconURL : 'morningtide.png', year : 2008 },

  //SHADOWMOOR
  [Extensions.SHADOWMOOR] : { block : 'Shadowmoor', name : 'Shadowmoor', iconURL : 'shadowmoor.png', year : 2008 },
  [Extensions.EVENTIDE] : { block : 'Shadowmoor', name : 'Eventide', iconURL : 'eventide.png', year : 2008 },

  //ALARA
  [Extensions.SHARDSALARA] : { block : 'Alara', name : 'Shards of Alara', iconURL : 'shards-of-alara.png', year : 2008 },
  [Extensions.CONFLUX] : { block : 'Alara', name : 'Conflux', iconURL : 'conflux.png', year : 2009 },
  [Extensions.ALARAREBORN] : { block : 'Alara', name : 'Alara Reborn', iconURL : 'alara-reborn.png', year : 2009 },

  //ZENDIKAR
  [Extensions.ZENDIKAR] : { block : 'Zendikar', name : 'Zendikar', iconURL : 'zendikar.png', year : 2009 },
  [Extensions.WORLDWAKE] : { block : 'Zendikar', name : 'Worldwake', iconURL : 'worldwake.png', year : 2010 },
  [Extensions.RISEOFELDRAZI] : { block : 'Zendikar', name : 'Rise of the Eldrazi', iconURL : 'rise-of-eldrazi.png', year : 2010 },

  //SCARS OF MIRRODIN
  [Extensions.SCARSOFMIRRODIN] : { block : 'Scars of Mirrodin', name : 'Scars of Mirrodin', iconURL : 'scars-of-mirrodin.png', year : 2010 },
  [Extensions.MIRRODINBESIEGED] : { block : 'Scars of Mirrodin', name : 'Mirrodin Besieged', iconURL : 'mirrodin-besieged.png', year : 2011 },
  [Extensions.NEWPHYREXIA] : { block : 'Scars of Mirrodin', name : 'New Phyrexia', iconURL : 'new-phyrexia.png', year : 2011 },

  //INNISTRAD
  [Extensions.INNISTRAD] : { block : 'Innistrad', name : 'Innistrad', iconURL : 'innistrad.png', year : 2011 },
  [Extensions.DARKASCENSION] : { block : 'Innistrad', name : 'Dark Ascension', iconURL : 'dark-ascension.png', year : 2012 },
  [Extensions.AVACYNRESTORED] : { block : 'Innistrad', name : 'Avacyn Restored', iconURL : 'avacyn-restored.png', year : 2012 },

  //RETURN TO RAVNICA
  [Extensions.RETURNTORAVNICA] : { block : 'Return to Ravnica', name : 'Return to Ravnica', iconURL : 'return-to-ravnica.png', year : 2012 },
  [Extensions.GATECRASH] : { block : 'Return to Ravnica', name : 'Gatecrash', iconURL : 'gatecrash.png', year : 2013 },
  [Extensions.DRAGONSMAZE] : { block : 'Return to Ravnica', name : 'Dragon\'s Maze', iconURL : 'dragons-maze.png', year : 2013 },

  //THEROS
  [Extensions.THEROS] : { block : 'Theros', name : 'Theros', iconURL : 'theros.png', year : 2013 },
  [Extensions.BORNOFTHEGODS] : { block : 'Theros', name : 'Born of the Gods', iconURL : 'born-of-the-gods.png', year : 2014 },
  [Extensions.JOURNEYINTONYX] : { block : 'Theros', name : 'Journey Into Nyx', iconURL : 'journey-into-nyx.png', year : 2014 },

  //KHANS OF TARKIR
  [Extensions.KHANSOFTARKIR] : { block : 'Khans of Tarkir', name : 'Khans of Tarkir', iconURL : 'khans-of-tarkir.png', year : 2014 },
  [Extensions.FATEREFORGED] : { block : 'Khans of Tarkir', name : 'Fate Reforged', iconURL : 'fate-reforged.png', year : 2015 },
  [Extensions.DRAGONSOFTARKIR] : { block : 'Khans of Tarkir', name : 'Dragons of Tarkir', iconURL : 'dragons-of-tarkir.png', year : 2015 },

  //BATTLE FOR ZENDIKAR
  [Extensions.BATTLEFORZENDIKAR] : { block : 'Battle for Zendikar', name : 'Battle for Zendikar', iconURL : 'battle-for-zendikar.png', year : 2015 },
  [Extensions.OATHOFTHEGATEWATCH] : { block : 'Battle for Zendikar', name : 'Oath of the Gatewatch', iconURL : 'oath-of-the-gatewatch.png', year : 2016 },

  //SHADOWS OVER INNISTRAD
  [Extensions.SHADOWSOVERINNISTRAD] : { block : 'Shadows Over Innistrad', name : 'Shadows Over Innistrad', iconURL : 'shadows-over-innistrad.png', year : 2016 },
  [Extensions.ELDRITCHMOON] : { block : 'Shadows Over Innistrad', name : 'Eldritch Moon', iconURL : 'eldritch-moon.png', year : 2016 },

  //KALADESH
  [Extensions.KALADESH] : { block : 'Kaladesh', name : 'Kaladesh', iconURL : 'kaladesh.png', year : 2016 },
  [Extensions.AETHERREVOLT] : { block : 'Kaladesh', name : 'Aether Revolt', iconURL : 'aether-revolt.png', year : 2017 },

  //AMONKHET
  [Extensions.AMONKHET] : { block : 'Amonkhet', name : 'Amonkhet', iconURL : 'amonkhet.png', year : 2017 },
  [Extensions.HOUROFDEVASTATION] : { block : 'Amonkhet', name : 'Hour of Devastation', iconURL : 'hour-of-devastation.png', year : 2017 },

  //IXALAN
  [Extensions.IXALAN] : { block : 'Ixalan', name : 'Ixalan', iconURL : 'ixalan.png', year : 2017 },
  [Extensions.RIVALSOFIXALAN] : { block : 'Ixalan', name : 'Rivals of Ixalan', iconURL : 'rivals-of-ixalan.png', year : 2018 },

}
