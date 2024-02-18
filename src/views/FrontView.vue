<template>
    <h2>前台</h2>
    <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink>|
    <RouterLink to="/Products">Product</RouterLink>|
    <RouterLink to="/Cart">Cart</RouterLink> |
    <RouterLink to="/login">Login</RouterLink> |
    <RouterLink to="/admin/products">後台購物車列表</RouterLink>
     </nav>
    <RouterView></RouterView>
</template>
