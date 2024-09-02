<script setup lang="ts">
import InputField from '@/components/InputField.vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import type { Ref } from "vue";
import { ref } from 'vue';
import type { PostInputs } from '@/types/types';
// import ErrorMessage from '@/components/ErrorMessage.vue';
import TextArea from '@/components/TextArea.vue';

const postInputs: Ref<PostInputs> = ref({
    title: "",
    post_content: "",
});

const rules = {
    title: { required, minLength: minLength(3) },
    post_content: { required, minLength: minLength(3) },
}

const v$ = useVuelidate(rules, postInputs);

const addPost = (): void => {
    // alert('I am executed');
    const result = v$.value.$validate();
    if (!result) {
        alert('I am executed');
        return;
    }
}

</script>

<template>
    <div class="w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div>
            <h1 class="text-lg font-semibold mb-4">Create Post</h1>
            <form action="" @submit.prevent="addPost()" class="flex flex-col gap-2">
                <div class="w-full">
                    <InputField label="Title" :form-errors="v$.title.$errors" v-model="postInputs.title" name="title"
                        id="title" type="text">
                    </InputField>
                </div>
                <div class="w-full">
                    <!-- <div class="flex flex-wrap items-center justify-between gap-2">
                    <label for="post_content" class="block text-sm font-medium text-gray-700">Post Content</label>
                    <ErrorMessage v-if="v$.post_content.$errors" :formErrors="v$.post_content.$errors"></ErrorMessage>
                </div> -->
                    <TextArea id="post_content" label="Post Content" v-model="postInputs.post_content"
                        :formErrors="v$.post_content.$errors"></TextArea>
                    <!-- <textarea id="post_content" name="post_content" v-model="postInputs.post_content"
                    :class="{ error: v$.post_content.$errors.length }"
                    class="mt-1 w-full rounded border-gray-200 bg-white text-sm text-gray-700 shadow-sm">
                </textarea> -->

                </div>

                <div class="py-8">
                    <button type="submit"
                        class="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                        Create
                    </button>
                </div>
            </form>
        </div>
        <div class="flex flex-col gap-2 prose-xl">
            <h2 class="text-center">Preview</h2>
            <h1 class="font-bold" v-html="postInputs.title"></h1>
            <div v-html="postInputs.post_content">

            </div>
        </div>
    </div>
</template>