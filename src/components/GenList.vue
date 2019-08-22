<template>
    <Layout>
        <div >
            <ul v-for="work in works" :key="work.id">
                <li>{{ work.title }}</li>
            </ul>
        </div>
    </Layout>
</template>

<script>
export default {
    title: 'general-list',
    data: {
        works: [
            {
                id: 1,
                title: 'gemstone'
            },
            {
                id: 2,
                title: 'swi'
            },
            {
                id: 2,
                title: 'daisy'
            }
        ],
        products: [
            {
                id: 1,
                title: 'gemstone'
            },
            {
                id: 2,
                title: 'swi'
            },
            {
                id: 2,
                title: 'daisy'
            }
        ],
        careers: [
            {
                id: 1,
                title: 'gemstone'
            },
            {
                id: 2,
                title: 'swi'
            },
            {
                id: 2,
                title: 'daisy'
            }
        ]
    },
    props: [
        works,
        careers,
        products
    ]
}
</script>