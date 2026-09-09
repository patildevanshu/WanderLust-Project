const sampleListings = [
  {
    "title": "Cozy Beachfront Cottage",
    "description": "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Malibu",
    "country": "United States",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.7798,
        34.0259
      ]
    }
  },
  {
    "title": "Modern Loft in Downtown",
    "description": "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New York City",
    "country": "United States",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -74.006,
        40.7128
      ]
    }
  },
  {
    "title": "Mountain Retreat",
    "description": "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1000,
    "location": "Aspen",
    "country": "United States",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Historic Villa in Tuscany",
    "description": "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Florence",
    "country": "Italy",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.2558,
        43.7696
      ]
    }
  },
  {
    "title": "Secluded Treehouse Getaway",
    "description": "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 800,
    "location": "Portland",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -122.6765,
        45.5051
      ]
    }
  },
  {
    "title": "Beachfront Paradise",
    "description": "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Cancun",
    "country": "Mexico",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -86.8515,
        21.1619
      ]
    }
  },
  {
    "title": "Rustic Cabin by the Lake",
    "description": "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 900,
    "location": "Lake Tahoe",
    "country": "United States",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -120.0324,
        38.9399
      ]
    }
  },
  {
    "title": "Luxury Penthouse with City Views",
    "description": "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3500,
    "location": "Los Angeles",
    "country": "United States",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -118.2437,
        34.0522
      ]
    }
  },
  {
    "title": "Ski-In/Ski-Out Chalet",
    "description": "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Verbier",
    "country": "Switzerland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.2297,
        46.0963
      ]
    }
  },
  {
    "title": "Safari Lodge in the Serengeti",
    "description": "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Serengeti National Park",
    "country": "Tanzania",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8333,
        -2.3333
      ]
    }
  },
  {
    "title": "Historic Canal House",
    "description": "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.9041,
        52.3676
      ]
    }
  },
  {
    "title": "Private Island Retreat",
    "description": "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 10000,
    "location": "Fiji",
    "country": "Fiji",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        178.065,
        -17.7134
      ]
    }
  },
  {
    "title": "Charming Cottage in the Cotswolds",
    "description": "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "Cotswolds",
    "country": "United Kingdom",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -1.8433,
        51.8333
      ]
    }
  },
  {
    "title": "Historic Brownstone in Boston",
    "description": "Step back in time in this elegant historic brownstone located in the heart of Boston.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Boston",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.0589,
        42.3601
      ]
    }
  },
  {
    "title": "Beachfront Bungalow in Bali",
    "description": "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.1889,
        -8.4095
      ]
    }
  },
  {
    "title": "Mountain View Cabin in Banff",
    "description": "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1500,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Art Deco Apartment in Miami",
    "description": "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
    "image": {
      "filename": "listingimage",
      "url": "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Miami",
    "country": "United States",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -80.1918,
        25.7617
      ]
    }
  },
  {
    "title": "Tropical Villa in Phuket",
    "description": "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 3000,
    "location": "Phuket",
    "country": "Thailand",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        98.3923,
        7.8804
      ]
    }
  },
  {
    "title": "Historic Castle in Scotland",
    "description": "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Scottish Highlands",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.2026,
        57.4596
      ]
    }
  },
  {
    "title": "Desert Oasis in Dubai",
    "description": "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 5000,
    "location": "Dubai",
    "country": "United Arab Emirates",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        55.2708,
        25.2048
      ]
    }
  },
  {
    "title": "Rustic Log Cabin in Montana",
    "description": "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1100,
    "location": "Montana",
    "country": "United States",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -110.3626,
        46.8797
      ]
    }
  },
  {
    "title": "Beachfront Villa in Greece",
    "description": "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2500,
    "location": "Mykonos",
    "country": "Greece",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3289,
        37.4467
      ]
    }
  },
  {
    "title": "Eco-Friendly Treehouse Retreat",
    "description": "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 750,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -83.7534,
        9.7489
      ]
    }
  },
  {
    "title": "Historic Cottage in Charleston",
    "description": "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1600,
    "location": "Charleston",
    "country": "United States",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -79.9311,
        32.7765
      ]
    }
  },
  {
    "title": "Modern Apartment in Tokyo",
    "description": "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
    },
    "price": 2000,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "Lakefront Cabin in New Hampshire",
    "description": "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1200,
    "location": "New Hampshire",
    "country": "United States",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -71.5724,
        43.1939
      ]
    }
  },
  {
    "title": "Luxury Villa in the Maldives",
    "description": "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 6000,
    "location": "Maldives",
    "country": "Maldives",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        73.2207,
        3.2028
      ]
    }
  },
  {
    "title": "Ski Chalet in Aspen",
    "description": "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 4000,
    "location": "Aspen",
    "country": "United States",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -106.8175,
        39.1911
      ]
    }
  },
  {
    "title": "Secluded Beach House in Costa Rica",
    "description": "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
    },
    "price": 1800,
    "location": "Costa Rica",
    "country": "Costa Rica",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -84.0907,
        9.9281
      ]
    }
  },
  {
    "title": "Château de Chambord Royal Estate",
    "description": "Step back into the Renaissance with an unforgettable stay near the Loire Valley. Features grand stone halls, vaulted ceilings, and manicured French gardens.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1585543805890-6051f7829f98?auto=format&fit=crop&w=800&q=60"
    },
    "price": 12500,
    "location": "Amboise",
    "country": "France",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        0.9831,
        47.4132
      ]
    }
  },
  {
    "title": "Highland Stone Keep & Watchtower",
    "description": "Perched above Loch Ness, this restored 14th-century fortress offers panoramic loch views, wood-burning hearths, and centuries of Scottish history.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=60"
    },
    "price": 14000,
    "location": "Inverness",
    "country": "United Kingdom",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -4.2247,
        57.4778
      ]
    }
  },
  {
    "title": "Bavarian Fairy-Tale Citadel",
    "description": "Nestled in the Alpine foothills, this Gothic castle boasts spiral stone staircases, antique chandeliers, and misty morning views of pristine lakes.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=60"
    },
    "price": 16500,
    "location": "Füssen",
    "country": "Germany",
    "category": "Castles",
    "geometry": {
      "type": "Point",
      "coordinates": [
        10.7011,
        47.5696
      ]
    }
  },
  {
    "title": "Tuscan Olive Grove Homestead",
    "description": "Immerse yourself in Chianti wine country. Wake up to cypress trees, olive harvesting, wine cellar tastings, and freshly pressed extra virgin olive oil.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4200,
    "location": "Siena",
    "country": "Italy",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        11.3308,
        43.3188
      ]
    }
  },
  {
    "title": "Provence Lavender Farmhouse",
    "description": "Surrounded by purple fields of blooming lavender, this 18th-century stone farmhouse offers quiet country trails, local goat cheeses, and summer sunsets.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3800,
    "location": "Valensole",
    "country": "France",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        5.9844,
        43.8361
      ]
    }
  },
  {
    "title": "Organic Dairy Homestead & Orchard",
    "description": "Experience authentic rural life in Vermont. Feed calves, pick organic apples, and enjoy artisan cheeses alongside cozy wooden interiors.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2600,
    "location": "Woodstock",
    "country": "United States",
    "category": "Farms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -72.5187,
        43.6242
      ]
    }
  },
  {
    "title": "Aurora Glass Dome Igloo",
    "description": "Sleep beneath the dancing Northern Lights in a heated thermal glass igloo surrounded by snow-covered pine forests and reindeer trails.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 9500,
    "location": "Rovaniemi",
    "country": "Finland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.7294,
        66.5039
      ]
    }
  },
  {
    "title": "Fjord Glacier Eco-Cabin",
    "description": "Modern Scandinavian cabin overlooking dramatic Norwegian fjords. Features an outdoor geothermal hot tub, floor-to-ceiling windows, and whale watching.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1483921020237-2ff51e8e4b22?auto=format&fit=crop&w=800&q=60"
    },
    "price": 8200,
    "location": "Tromsø",
    "country": "Norway",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        18.9553,
        69.6492
      ]
    }
  },
  {
    "title": "Glacier Ridge Icefield Cabin",
    "description": "Situated near Vatnajökull glacier, this secluded cabin offers black sand surroundings, crystalline glacier lagoons, and geothermal hot springs.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 7600,
    "location": "Reykjavik",
    "country": "Iceland",
    "category": "Arctic",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -21.9426,
        64.1466
      ]
    }
  },
  {
    "title": "Traditional Kyoto Machiya Tatami Room",
    "description": "Authentic cedar wood townhouse room in historic Gion. Features Shoji paper sliding doors, rush tatami mats, and morning matcha tea ceremonies.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2900,
    "location": "Kyoto",
    "country": "Japan",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        135.7681,
        35.0116
      ]
    }
  },
  {
    "title": "Heritage Havelian Bedroom in Pink City",
    "description": "Spacious handcrafted bedroom inside an authentic royal haveli. Decorated with Rajasthani jharokhas, antique brass lanterns, and courtyard fountains.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2200,
    "location": "Jaipur",
    "country": "India",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        75.7873,
        26.9124
      ]
    }
  },
  {
    "title": "Montmartre Artist Sunlit Studio Room",
    "description": "Charming bohemian guest room on cobblestone streets near Sacré-Cœur. Packed with vintage books, French easel, and views over Parisian rooftops.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3100,
    "location": "Paris",
    "country": "France",
    "category": "Rooms",
    "geometry": {
      "type": "Point",
      "coordinates": [
        2.3431,
        48.8867
      ]
    }
  },
  {
    "title": "Cappadocia Cliffside Cave Suite",
    "description": "Carved straight into volcanic tuff rock formations, this luxury cave suite offers private sunrise terrace views of hundreds of hot air balloons.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=800&q=60"
    },
    "price": 6800,
    "location": "Göreme",
    "country": "Turkey",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8289,
        38.6431
      ]
    }
  },
  {
    "title": "Futuristic Glass Biosphere Pod",
    "description": "Architectural marvel nestled deep in the desert sands. Powered by 100% solar energy with zero light pollution and panoramic celestial skylights.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 7200,
    "location": "Wadi Rum",
    "country": "Jordan",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        35.4342,
        29.5763
      ]
    }
  },
  {
    "title": "Minimalist Bamboo Eco-Sanctuary",
    "description": "Award-winning open-air bamboo cathedral villa nestled above the Ayung river valley with organic plunge pool and canopy daybeds.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5500,
    "location": "Ubud",
    "country": "Indonesia",
    "category": "Trending",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.2625,
        -8.5069
      ]
    }
  },
  {
    "title": "Matterhorn Peak Wooden Chalet",
    "description": "Ski-in/ski-out Swiss alpine chalet featuring hand-hewn logs, crackling stone fireplace, private sauna, and front-row vistas of the Matterhorn.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?auto=format&fit=crop&w=800&q=60"
    },
    "price": 11000,
    "location": "Zermatt",
    "country": "Switzerland",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        7.7491,
        45.9765
      ]
    }
  },
  {
    "title": "Banff Alpine Forest Lodge",
    "description": "Set in the Canadian Rockies surrounded by towering Douglas firs, turquoise glacial lakes, and sweeping mountain passes.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?auto=format&fit=crop&w=800&q=60"
    },
    "price": 6500,
    "location": "Banff",
    "country": "Canada",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -115.5708,
        51.1784
      ]
    }
  },
  {
    "title": "Himalayan Cedar Wood Haven",
    "description": "Quiet mountain cottage overlooking snow-clad Pir Panjal peaks. Breathe crisp pine air, listen to mountain streams, and trek scenic trails.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3400,
    "location": "Manali",
    "country": "India",
    "category": "Mountains",
    "geometry": {
      "type": "Point",
      "coordinates": [
        77.1887,
        32.2396
      ]
    }
  },
  {
    "title": "Uluwatu Cliff Edge Infinity Villa",
    "description": "Suspended 150 meters above the Indian Ocean, this designer estate features a 25-meter crystal infinity pool that seems to spill into the horizon.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=60"
    },
    "price": 13500,
    "location": "Bali",
    "country": "Indonesia",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        115.0884,
        -8.8291
      ]
    }
  },
  {
    "title": "Marrakech Riads with Emerald Pool",
    "description": "Private Moroccan palace centered around an emerald-tiled plunge pool lined with banana palms, mosaic zellige, and rooftop daybeds.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=60"
    },
    "price": 7900,
    "location": "Marrakech",
    "country": "Morocco",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -7.9898,
        31.6295
      ]
    }
  },
  {
    "title": "Bora Bora Overwater Lagoon Pool Villa",
    "description": "Indulge in a private overwater bungalow featuring glass-floor viewing panels and a cantilevered infinity pool dipping over calm turquoise waters.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 21000,
    "location": "Bora Bora",
    "country": "French Polynesia",
    "category": "Amazing Pools",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -151.7415,
        -16.5004
      ]
    }
  },
  {
    "title": "Red Rocks Stargazer Geodesic Dome",
    "description": "Off-grid luxury glamping dome equipped with plush king mattress, skylight viewing dome, propane stove, and red sandstone canyon views.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=60"
    },
    "price": 3200,
    "location": "Moab",
    "country": "United States",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -109.5498,
        38.5733
      ]
    }
  },
  {
    "title": "Serengeti Safari Canvas Suite",
    "description": "Classic African safari canvas pavilion under acacia trees. Hear wildlife under starry savannah skies with campfire dinners and guided game drives.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=800&q=60"
    },
    "price": 8900,
    "location": "Serengeti",
    "country": "Tanzania",
    "category": "Camping",
    "geometry": {
      "type": "Point",
      "coordinates": [
        34.8333,
        -2.3333
      ]
    }
  },
  {
    "title": "Dal Lake Royal Carved Cedar Houseboat",
    "description": "Handcrafted Kashmiri wooden houseboat floating gently on serene Dal Lake. Features fragrant walnut furniture, shikara rides, and Himalayan backdrop.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4100,
    "location": "Srinagar",
    "country": "India",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.8723,
        34.0837
      ]
    }
  },
  {
    "title": "Amsterdam Prinsengracht Canal Houseboat",
    "description": "Sleek and newly renovated floating home right on the iconic canal belt. Watch boats cruise past your living room window and bike through Jordaan.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?auto=format&fit=crop&w=800&q=60"
    },
    "price": 5200,
    "location": "Amsterdam",
    "country": "Netherlands",
    "category": "Boats",
    "geometry": {
      "type": "Point",
      "coordinates": [
        4.8852,
        52.3702
      ]
    }
  },
  {
    "title": "Santorini Sunset Caldera Villa",
    "description": "Iconic whitewashed cliff villa in Oia with private outdoor Jacuzzi, cobalt blue doors, and unobstructed views of Aegean Sea sunsets.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60"
    },
    "price": 9800,
    "location": "Santorini",
    "country": "Greece",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        25.3753,
        36.4618
      ]
    }
  },
  {
    "title": "Zanzibar White Sands Oceanfront Bungalow",
    "description": "Step straight from your thatched veranda onto powder-soft white coral sand. Enjoy fresh seafood caught daily and crystal turquoise shallows.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60"
    },
    "price": 4600,
    "location": "Zanzibar",
    "country": "Tanzania",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        39.2026,
        -6.1659
      ]
    }
  },
  {
    "title": "Goa Palolem Palm Beach Hut",
    "description": "Breezy eco-friendly beach cottage nestled directly under coconut groves along the golden sands of Palolem Bay with gentle ocean waves.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60"
    },
    "price": 2800,
    "location": "Goa",
    "country": "India",
    "category": "Beach",
    "geometry": {
      "type": "Point",
      "coordinates": [
        74.0232,
        15.01
      ]
    }
  },
  {
    "title": "Shinjuku Skyline High-Rise Suite",
    "description": "Floor-to-ceiling panoramic views over neon-lit Tokyo from the 38th floor. Sleek Japanese minimalism, soaking tub, and high-speed transit downstairs.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=60"
    },
    "price": 6100,
    "location": "Tokyo",
    "country": "Japan",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        139.6917,
        35.6895
      ]
    }
  },
  {
    "title": "SoHo Designer Brickwork Loft",
    "description": "Sun-drenched cast-iron building loft in downtown Manhattan with 14-foot ceilings, original exposed brick, vintage velvet sofas, and curated art.",
    "image": {
      "filename": "listingimage",
      "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=60"
    },
    "price": 8500,
    "location": "New York City",
    "country": "United States",
    "category": "Iconic Cities",
    "geometry": {
      "type": "Point",
      "coordinates": [
        -73.9996,
        40.7233
      ]
    }
  }
];

module.exports = { data: sampleListings };
