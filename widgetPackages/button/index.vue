<template>
    <div>
        <button :class="btnClass">
            <slot></slot>
        </button>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
defineOptions({
    name: "lcButton"
})
const props = defineProps({
    type: {
        type: String,
        default: "default"
    },
    size: {
        type: String,
        default: "normal"
    },
    round: {
        type: Boolean,
        default: false
    },
    disabled: {
        type: Boolean,
        default: false
    }
})
console.log(props.type);
/* 
    颜色类型：默认，primary，success，warning，danger，info
    大小：small  normal  large
*/
// 先判断大小
const btnClass = computed(() => {
    return [
        "lc-button",
        props.size == "normal" ? "" : `lc-button-${props.size}`,
        props.type ? (props.disabled ? `lc-button-${props.type}-disabled` : `lc-button-${props.type}`) : `lc-button-${props.type}`,
    ]
})
</script>

<style lang="scss" scoped>
.lc-button {
    height: 32px;
    font-size: 14px;
    min-width: 64px;
    padding: 0 16px;
    color: #fff;
}

.lc-button-normal {
    height: 32px;
}

.lc-button-small {
    height: 24px;
    font-size: 12px;
}

.lc-button-large {
    height: 40px;
}
// 主题样式
.lc-button-default {
    background-color: #fff;
    border-color: #fff;
    color: #606266;
    border: 1px solid #dcdfe6;
    outline: none;
    cursor: pointer;
    border-radius: 4px;
    &:focus{
        outline: none;
    }
}

.lc-button-success {
    background-color: #4caf50;
    border-color: #4caf50;
}

.lc-button-primary {
    background-color: #1867c0;
    border-color: #1867c0;
}

.lc-button-warning {
    background-color: #e6a23c;
    border-color: #e6a23c;
}

.lc-button-info {
    background-color: #909399;
    border-color: #909399;
}

.lc-button-danger {
    background-color: #ff5252;
    border-color: #ff5252;
}
// 禁用样式
.lc-button-default-disabled {
    background-color: #fff;
    border-color: #fff;
    color: #606266;
    border: 1px solid #dcdfe6;
    opacity: 0.5;
    cursor: not-allowed;
}

.lc-button-success-disabled {
    background-color: #4caf50;
    border-color: #4caf50;
    opacity: 0.5;
    cursor: not-allowed;
}

.lc-button-primary-disabled {
    background-color: #1867c0;
    border-color: #1867c0;
    opacity: 0.5;
    cursor: not-allowed;
}

.lc-button-warning-disabled {
    background-color: #e6a23c;
    border-color: #e6a23c;
    opacity: 0.5;
    opacity: 0.5;
    cursor: not-allowed;
}

.lc-button-info-disabled {
    background-color: #909399;
    border-color: #909399;
    opacity: 0.5;
    cursor: not-allowed;
}

.lc-button-danger-disabled {
    background-color: #ff5252;
    border-color: #ff5252;
    opacity: 0.5;
    cursor: not-allowed;
}
</style>