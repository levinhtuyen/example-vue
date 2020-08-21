<template>
<div id="navbar">
    <!-- <div id="navbar" class=" row style-mar-padd-0">
        <b-row class="style-mar-padd-0">
        <div class="col-lg-10 col-md-10-col-sm-10">

        </div>
        <div class="col-lg-2 col-md-2-col-sm-2">
            <img src="./../assets/search.png" style="width:50px;" alt="">
        </div>
        </b-row>

    </div> -->
    <!--Navbar-->
    <nav class="navbar navbar-expand-lg navbar-dark">

        <!-- Navbar brand -->
        <a href="#">
            <img src="https://go2joy.vn/images/logo.jpg" alt="Logo" class="logo">
        </a>

        <!-- Collapse button -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav" aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
            <img src="./../../assets/search.png" class="search" alt="">
        </button>

        <!-- Collapsible content -->
        <div class="collapse navbar-collapse" id="basicExampleNav">

            <!-- Links -->
            <ul class="navbar-nav mr-auto">
            
                <!-- <li class="nav-item">
                    <router-link :to="{ name: 'userList'}">User List</router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'user', params: { userId: 123 } }">User 123</router-link>
                </li> -->

                <!-- Dropdown -->
                <!-- <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">LIÊN HỆ</a>
                    <div class="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                        <a class="dropdown-item" href="#">THÔNG TIN LIÊN HỆ</a>
                        <a class="dropdown-item" href="#">TUYỂN DỤNG</a>
                        <a class="dropdown-item" href="#">BLOG</a>
                    </div>
                </li> -->

            </ul>
            <!-- Links -->

            <form class="form-inline">
                <div class="md-form my-0">
                    <img src="./../../assets/search.png" style="width:50px;" alt="">
                </div>
            </form>
        </div>
        <!-- Collapsible content -->
  
    </nav>
    <!--/.Navbar-->
</div>
</template>

<script>

export default {
    name: 'Header',
  

}
</script>

<style scoped>
.style-img {
    width: 200px;
    height: auto;
}

.logo {
    width: 100px;
}

.search {
    width: 90px;
}
.md-form img{
    margin: 0 20px
}
@media only screen and (max-width: 480px) {
    .logo {
        width: 40px;
    }
}

@media only screen and (max-width: 768px) and (min-width: 600px) {
    .logo {
        width: 50px;
    }

    .search {
        width: 50px;
    }
}

.style-mar-padd-0 {
    margin: 0;
    padding: 0;
}

.search {
    width: 25px;
}

#navbar {
    overflow: hidden;
    background-color: #ffffff;
    transition: 0.4s;
    /* Adds a transition effect when the padding is decreased */
    /* Sticky/fixed navbar */
    width: 100%;
    top: 0;
    /* At the top */
    z-index: 99;
}

/* Style the navbar links */
#navbar a {
    float: left;
    color: black;
    text-align: center;
    padding: 5px;
    text-decoration: none;
    font-size: 18px;
    line-height: 25px;
    border-radius: 4px;
}

/* Style the logo */
#navbar #logo {
    font-size: 35px;
    font-weight: bold;
    transition: 0.4s;
}

.navbar {
    padding: 0;
}

/* Links on mouse-over */
#navbar a:hover {
    background-color: #ddd;
    color: black;
}

/* Style the active/current link */
#navbar a.active {
    background-color: dodgerblue;
    color: white;
}

/* Display some links to the right */
#navbar-right {
    float: right;
}
</style>
