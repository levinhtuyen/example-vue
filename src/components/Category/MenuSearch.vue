<template>
<div id="navbar">
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
               
            </ul>
            <!-- Links -->

            <form class="form-inline">
                <div class="md-form my-0">
                     <el-autocomplete v-model="state" :fetch-suggestions="querySearchAsync" placeholder="Nhập từ khóa" @select="handleSelect"></el-autocomplete>
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
    name: 'MenuSearch',
    data() {
        return {
            links: [],
            state: '',
            timeout: null
        };
    },
    methods: {
        loadAll() {
            return [{
                    "value": "Khoảng cách",
                    "link": "#"
                },
                {
                    "value": "Giá tăng dần",
                    "link": "#"
                },
                {
                    "value": "Giá giảm dần",
                    "link": "#"
                },
                {
                    "value": "Xếp hạng và Bình chọn",
                    "link": "#"
                },
                {
                    "value": "Hot nhất",
                    "link": "#"
                },
                {
                    "value": "Khuyến mãi",
                    "link": "#"
                },
                {
                    "value": "Khách sạn mới",
                    "link": "#"
                }
            ];
        },
        querySearchAsync(queryString, cb) {
            var links = this.links;
            var results = queryString ? links.filter(this.createFilter(queryString)) : links;

            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                cb(results);
            }, 3000 * Math.random());
        },
        createFilter(queryString) {
            return (link) => {
                return (link.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
            };
        },
        handleSelect(item) {
            console.log(item);
        }
    },
    mounted() {
        this.links = this.loadAll();
    }

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

.md-form img {
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
