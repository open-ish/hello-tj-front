<template>
  <section class="container-page">
    <header class="header">
      <h1 class="header--title tj-text-panel">{{ post.title }}</h1>
      <p class="tj-text-body2">
        {{ post.intro }}
      </p>
    </header>
    <div class="content text-justify">
      <article
        v-for="content in post.contents"
        :key="content.id"
        class="content--item"
      >
        <h2
          class="content--item-title tj-text-title"
          :data-testid="content.id + '-title'"
        >
          {{ content.title }}
        </h2>
        <div
          v-for="body in content.body"
          :key="body.text"
          :data-testid="content.id + '-content'"
          class="content--item-text"
        >
          <component
            :is="componentName(body.type)"
            v-if="body.type"
            :config="body"
            class="content--item-text"
          />
          <p v-else v-html-safe="body.text" />
        </div>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'

import Quotes from '@/components/Layouts/Blog/Quotes/Quotes.vue'
import Chip from '@/components/AntiCorruption/Chip/Chip.vue'
import FindMoreInfoList from '@/components/Layouts/Blog/FindMoreInfoList/FindMoreInfoList.vue'
import ChipGroup from '@/components/AntiCorruption/Chip/ChipGroup.vue'
import {
  componentTagValidator,
  componentTagValidatorParams,
} from '@/helpers/Blog/componentsValidatior/componentsValidatior'
import { combinedVueInstanceWorkAround } from '@/helpers/work-around/combinedVueInstanceWorkAround'

export default Vue.extend({
  name: 'Post',
  components: {
    Quotes,
    FindMoreInfoList,
    Chip,
    ChipGroup,
  },
  layout: 'blog',
  asyncData({ params, query, payload }) {
    console.log(
      '🚀 ~ file: _slug.vue ~ line 54 ~ asyncData ~ params',
      params,
      query,
      payload
    )
  },
  data() {
    return {
      post: {
        title: 'Development world from a developer’s eyes',
        intro: `Nothing more modern to talk about than the development world, even if sometimes systems pass unsee for who are using them. Fortunately, it is so overvalued for those who are behind the scenes that you can find more and more articles and forums about it.
        I'm going to talk about what we must keep in mind creating value systems and what we must do to be a valued developers.`,
        contents: [
          {
            title: `System's purpose`,
            id: 'system purpose ',
            body: [
              {
                text: `It's unarguable that systems come to stay. In just a blink of an eye, we can see a lot of systems around us.
                They are there when we need paying a bill, buying a game, sharing some posts, talking with someone far away apart. But, have you ever tried defining what a system means or why we need them? I know that sounds a bit essential, but sometimes it looks like some developers don't know the purpose behind creating systems.
                `,
              },
              {
                type: 4,
                mode: 'default',
                text: `"A regularly interacting or interdependent group of items forming aunified whole."`,
                author: 'The merriam-webster dictionary',
              },
              {
                text: `Thinking about the literal definition, that sounds ok, but regarding purpose (business mindset), systems could also be defined as a tool (or a solution) to solve a main problem. Sometimes, this main problem can be composed of many small problems. As many more small problems the system solves means it's getting better. So, in other words, systems can help people to get better lives, since solving problems is their purpose. Do you get how meaningful it is?
                Keep in mind the next time you are coding one: <strong>It is not about who does or what is used, but for who can be helped</strong>.
                `,
              },
              {
                type: 4,
                mode: 'comment',
                text: `It is not about who does or what is used, but for who can be helped.`,
              },
            ],
          },
          {
            title: `Developer’s roles`,
            id: 'developer-roles',
            body: [
              {
                text: `After putting the purpose of the system on the tablet, it's important to understand the developer's roles.`,
              },
              {
                text: `If you are new to this world, you are probably thinking about developers at coding. For sure, that makes sense. The most important skill from any developer is that, but is it enough?`,
              },
              {
                text: `In that first moment, I gonna talk about the general responsibilities needed from a good developer. But as soon, I also will create a post with the difference between Juniors, Middles, and Seniors skills.`,
              },
              {
                type: 1,
                title: 'Developer’s responsibilities:',
                content: [
                  {
                    text: 'Coding/making the system grow.',
                  },
                  {
                    text: 'Ensuring quality and security into the system.',
                  },
                  {
                    text: 'Finding ways to improve the application (thinking on performance, accessibility, architecture, and so on), proactively.',
                  },
                  {
                    text: `Warning the company about the system's needs and development team's needs, proactively.`,
                  },
                  {
                    text: 'Scalability.',
                  },
                  {
                    text: 'Creating smartly processes/flows (as git-flow).',
                  },
                  {
                    text: 'Smartly deliveries (coding never stops, so we must split our deliveries to give value).',
                  },
                  {
                    text: 'Creating ways to be more prevented than reactive, principally to avoid crashing.',
                  },
                  {
                    text: 'Sharing knowledge.',
                  },
                  {
                    text: `Taking care of the system's health.`,
                  },
                ],
              },
              {
                text: `As you can see, coding is not the only developer's responsibility. I like to think that developers are owners of the system, so they must take care of it.
                     In other words, it's expected that you will mind all stuff that might impact the system. `,
              },
              {
                text: `You're probably wondering: How about programming languages? Frameworks, and so on? Yeah, again, these are the first things we think about development word. But actually, many hard skills that we need are volatile, so it's impossible (and, to be honest, unnecessary) to know all of them. But, these responsibilities and soft skills are needed and they would make you a valued professional because hard skills are easier to learning and teaching than soft skills and responsibilities.`,
              },
              {
                text: `Now, you could work on a company using React, but tomorrow, you could receive a great opportunity to work with Vue and will need to study it. And that's ok because <strong>it is not about who does or what is used, but for who can be helped.</strong> But taking care of the system and have these responsibilities will be necessary whatever you go.`,
              },
            ],
          },
        ],
      },
    }
  },
  head() {
    return { title: combinedVueInstanceWorkAround(this).postTitle() as string }
  },
  methods: {
    componentName(type: componentTagValidatorParams) {
      return componentTagValidator(type)
    },
    postTitle(): string {
      return this.post ? `${this.post} -` : ''
    },
  },
})
</script>

<style lang="scss" scoped>
@import '~@/styles/layouts/blog/index.scss';

.friendly-list {
  &--itens {
    display: flex;
    flex-wrap: wrap;
  }

  &--item:not(:last-of-type) {
    margin-right: $space-xs;
    margin-bottom: $space-xs;
  }
}
</style>
