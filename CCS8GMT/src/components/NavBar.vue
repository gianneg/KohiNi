<template>
  <nav class="navbar">
    <!-- Left Links -->
    <div class="nav-links">
      <div class="dropdown">
        <button class="nav-item">ABOUT</button>
        <div class="dropdown-menu">
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Frequently Asked Questions</a>
          <a href="#">Site Map</a>
        </div>
      </div>

      <div class="dropdown">
        <button class="nav-item">RECIPES</button>
        <div class="dropdown-menu">
          <a href="#">Caffeine</a>
          <a href="#">Non-Caffeine</a>
        </div>
      </div>
    </div>

    <!-- Logo -->
    <div class="logo">Placeholder</div>

    <!-- Search Bar -->
    <div class="search-bar">
      <input type="text" placeholder="Search..." />
      <button>🔍</button>
    </div>
  </nav>
</template>

<style>
/* Navbar Container */ 
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #ECE0D1;
  color: #492310;
  
}

/* Left Links */
.nav-links {
  display: flex;
  gap: 20px;
}

/* Dropdown Container */
.dropdown {
  position: relative;
}

/* Dropdown Button */
.nav-item {
  background: none;
  border: none;
  color: #492310;
  cursor: pointer;
  font-size: 20px;
  padding: 8px;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-style: normal;
}

/* Dropdown Menu */
.dropdown-menu {
  display: none;
  position: absolute;
  background-color: white;
  color: black;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  min-width: 150px;
  top: 44px;
  left: 0;
  border-radius: 4px;
  overflow: hidden;
}

/* Show Dropdown on Hover */
.dropdown:hover .dropdown-menu {
  display: block;
}

/* Dropdown Items */
.dropdown-menu a {
  display: block;
  padding: 10px;
  text-decoration: none;
  color: black;
  transition: background 0.2s;
}

.dropdown-menu a:hover {
  background-color: #ddd;
}

/* Centered Logo */
.logo {
  font-size: 20px;
  font-weight: bold;
}

/* Search Bar */
.search-bar {
  display: flex;
  align-items: center;
  gap: 5px;
}

.search-bar input {
  padding: 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  outline: none;
}

.search-bar button {
  background: none;
  border: none;
  cursor: pointer;
  color: white;
}
</style>
