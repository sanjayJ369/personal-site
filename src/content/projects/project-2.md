---
title: "Project 2"
description: "Building a 2D Dungeon Crawler with Godot and SQLite Database Integration"
date: "16-05-2004"
image: "https://picsum.photos/800/600"
tags: [godot, databases, gamedev, sqlite]
---

# Dungeon Data: A Godot Adventure

## Overview

In this project, I developed a 2D dungeon crawler game using the Godot Engine with an integrated SQLite database for persistent game state and procedural level generation.

![Game screenshot](https://picsum.photos/800/400?random=1)

## Technology Stack

- **Godot Engine 4.0**: Core game development platform
- **GDScript**: Primary programming language
- **SQLite**: Local database for game data
- **Custom Shaders**: For lighting and special effects

## Database Integration

One of the most interesting aspects of this project was implementing a robust database system to handle:

- Player progress and inventory
- Procedurally generated levels
- Enemy behavior patterns
- Quest tracking

Here's a simplified diagram of the database schema:

![Database Schema](https://picsum.photos/600/400?random=2)

## Code Example

The following code demonstrates how I connected the Godot game to the SQLite database:

```gdscript
extends Node

const SQLite = preload("res://addons/godot-sqlite/bin/gdsqlite.gdns")
var db
var db_path = "user://game_data.db"

func _ready():
    db = SQLite.new()
    db.path = db_path

    var check = db.open_db()
    if check:
        print("Database successfully opened")
    else:
        print("Error opening database")

    # Create tables if they don't exist
    _create_tables()

func _create_tables():
    db.query("CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY, name TEXT, health INTEGER, experience INTEGER)")
    db.query("CREATE TABLE IF NOT EXISTS inventory (id INTEGER PRIMARY KEY, player_id INTEGER, item_id INTEGER, quantity INTEGER)")
```

## Development Challenges

The most challenging aspects of this project were:

1. Synchronizing real-time gameplay with database operations
2. Optimizing query performance for smooth gameplay
3. Designing a flexible schema that could accommodate future game expansions

![Development workspace](https://picsum.photos/800/500?random=3)

## Gameplay Demo

Check out this short gameplay demo:

<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Level Generation

The procedural level generation algorithm uses a combination of:

- Cellular automata for natural-looking caverns
- Binary Space Partitioning (BSP) for room layout
- SQLite for storing and retrieving generated level templates

![Level generation visualization](https://picsum.photos/800/400?random=4)

## Future Improvements

I plan to enhance this project with:

- Online multiplayer using a server-side PostgreSQL database
- More sophisticated enemy AI using machine learning
- A level editor that allows players to create and share custom dungeons

## Conclusion

This project demonstrated the powerful combination of Godot Engine's flexibility with the reliability of SQLite for game data management. The resulting system provides a solid foundation for building complex games with persistent state and procedural content.

![Game logo](https://picsum.photos/400/400?random=5)

---

_All images in this article are placeholders and would be replaced with actual game screenshots and diagrams in a real project documentation._
