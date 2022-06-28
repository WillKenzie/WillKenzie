items = []


def add_to_items(name: str, damage: int, rarity: int):
    for i in range(rarity):
        items.append({"name": name, "damage": damage})

add_to_items("Swanson Long-Sniffer 100", 10, 10)
add_to_items("Swanson Long-Sniffer 90", 15, 9)
add_to_items("Swanson Long-Sniffer 80", 20, 8)
add_to_items("Swanson Long-Sniffer 70", 20, 7)
add_to_items("Swanson Bronze-Sniffer 60", 25, 6)
add_to_items("Swanson Bronze-Sniffer 50", 30, 5)
add_to_items("Swanson Golden Long-Sniffer 40", 35, 4)
add_to_items("Swanson Golden Long-Sniffer 30", 40, 3)
add_to_items("Swanson 20 Ultra-Sniffer", 45, 2)
add_to_items("Swanson 10 Ultra-Sniffer", 50, 1)
add_to_items("Willow Sniper 50", 50, 5)
add_to_items("Willow Sniper 60", 60, 4)
add_to_items("Willow Sniper 70", 70, 3)
add_to_items("Willow Sniper 80", 80, 2)
add_to_items("Willow Sniper 90", 90, 1)
add_to_items("Wooden Short-Range Projectile Shooter .5", 5, 10)
add_to_items("Wooden Short-Range Projectile Shooter .10", 10, 10)
add_to_items("Wooden Short-Range Projectile Shooter .15", 15, 10)
add_to_items("Tormod Automatic 1000", 100, 1)
add_to_items("Tormod Automatic 9000", 90, 2)
add_to_items("Tormod Automatic 8000", 80, 3)
add_to_items("Tormod Automatic 7000", 70, 4)
add_to_items("Tormod Automatic 6000", 60, 5)
add_to_items("Cassidy Blade V", 10, 10)