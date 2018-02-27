<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        created(){

        },
        mounted() {
            this.renderChart({
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                datasets: [
                    {
                    label: 'GitHub Commits',
                    borderColor: '#5B105B',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                    }
                ]
            })
        }
    }
</script>