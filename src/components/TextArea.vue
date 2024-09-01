<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue';
import { Editor, useEditor, EditorContent } from '@tiptap/vue-3';
import StarterKit from '@tiptap/starter-kit';
import type { ErrorObject } from "@vuelidate/core";
import ErrorMessage from "@/components/ErrorMessage.vue";
import { ref } from 'vue';

const props = defineProps<{
    formErrors?: ErrorObject[] | any;
    modelValue: string;
    label?: string;
    id?: string;
    placeholder?: string;
    // diabled?: boolean;
}>();

const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
}>();

// const editor = useEditor({
//     content: '<p>I love</p>',
//     extensions: [StarterKit],
// })
const editor = ref<Editor | null>(null);

onMounted(() => {
    editor.value = new Editor({
        extensions: [StarterKit],
        content: props.modelValue,
        onUpdate: () => {
            if (editor.value) {
                emit('update:modelValue', editor.value.getHTML())
            }
        },
    })
})

// const onInput = (event: Event) => {
//     const target = event.target as HTMLInputElement;
//     emit('update:modelValue', target.value);
// }
// const onInput = () => {
//     emit('update:modelValue', editor.value?.getHTML);
// }

onBeforeUnmount(() => {
    if (editor.value) {
        editor.value.destroy()
    }
})

</script>

<template>
    <div>
        <div class="flex flex-wrap items-center justify-between gap-2">
            <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
            <ErrorMessage v-if="props.formErrors" :formErrors="props.formErrors"></ErrorMessage>
        </div>
        <editor-content :editor="editor" :id :value="modelValue"
            :class="{ error: props.formErrors.length ? props.formErrors.length : '' }"
            class="mt-1 w-full rounded border border-gray-200 text-sm shadow-sm" />
    </div>
</template>

<style>
/* Basic editor styles */
.tiptap {
    :first-child {
        margin-top: 0;
    }

    /* List styles */
    ul,
    ol {
        padding: 0 1rem;
        margin: 1.25rem 1rem 1.25rem 0.4rem;

        li p {
            margin-top: 0.25em;
            margin-bottom: 0.25em;
        }
    }

    /* Heading styles */
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        line-height: 1.1;
        margin-top: 2.5rem;
        text-wrap: pretty;
    }

    h1,
    h2 {
        margin-top: 3.5rem;
        margin-bottom: 1.5rem;
    }

    h1 {
        font-size: 1.4rem;
    }

    h2 {
        font-size: 1.2rem;
    }

    h3 {
        font-size: 1.1rem;
    }

    h4,
    h5,
    h6 {
        font-size: 1rem;
    }

    /* Code and preformatted text styles */
    code {
        background-color: var(--purple-light);
        border-radius: 0.4rem;
        color: var(--black);
        font-size: 0.85rem;
        padding: 0.25em 0.3em;
    }

    pre {
        background: var(--black);
        border-radius: 0.5rem;
        color: var(--white);
        font-family: 'JetBrainsMono', monospace;
        margin: 1.5rem 0;
        padding: 0.75rem 1rem;

        code {
            background: none;
            color: inherit;
            font-size: 0.8rem;
            padding: 0;
        }
    }

    blockquote {
        border-left: 3px solid var(--gray-3);
        margin: 1.5rem 0;
        padding-left: 1rem;
    }

    hr {
        border: none;
        border-top: 1px solid var(--gray-2);
        margin: 2rem 0;
    }
}

.tiptap {
    @apply min-h-48 bg-white;
}
</style>