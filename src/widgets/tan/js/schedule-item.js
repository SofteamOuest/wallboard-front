import scheduleService from './schedule-service.js'

export default {
    ScheduleItem: Vue.component('schedule-item', {
        props: ['busLine'],
        data() {
            return {
                schedule: {
                    direction: this.busLine.direction
                }
            }
        },
        template:
            `<section :class="classObject">
                <header>
                    <h2>{{busLine.line}}</h2>
                    <h3>{{schedule.direction}}</h3>
                </header>
                <p>{{nextScheduleFormatted}}</p>
            </section>`,
        computed: {
            classObject() {
                return {
                    soon: this.schedule.next <= 3,
                    imminent: this.schedule.next <= 1
                }
            },
            nextScheduleFormatted() {
                return this.schedule.next < 30
                    ? `${Math.floor(this.schedule.next)} min ${this.schedule.next % 1 > .5 ? 30 : ''}`
                    : `${Math.floor(this.schedule.next)} min`
            }
        },
        mounted() {
            scheduleService.getSchedule(this.busLine)
                .then(s => this.schedule = s)
        }
    })
}