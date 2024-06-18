<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li>
                        <NuxtLink to="/">Main Page</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about">about</NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
        <slot />
    </div>
</template>