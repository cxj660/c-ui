<template>
    <button class="c-button" @click="handleClick" :aria-disabled="true" :disabled="disabled || loading"
        :autofocus="autofocus" :type="nativeType" :class="[
            type ? 'c-button--' + type : '',
            buttonSize ? 'c-button--' + buttonSize : '',
            {
                'is-disabled': true,
                'is-loading': loading,
                'is-plain': plain,
                'is-round': round,
                'is-circle': circle
            }
        ]">
        <i class="el-icon-loading" v-if="loading"></i>
        <i :class="icon" v-if="icon && !loading"></i>
        <div v-if="$slots.default">
            <slot></slot>``
        </div>
    </button>
</template>

<script setup lang="ts" name="c-button">

interface Props {
    type: '' | 'primary' | 'success' | 'info' | 'warning' | 'danger'
    size: '' | 'mini' | 'small' | 'medium' | 'large'
    loading: boolean  // 加载
    icon: string  // 按钮图标
    nativeType: "button" | "submit" | "reset" | undefined  // 原生 type 属性
    buttonSize: string
    plain: boolean
    round: boolean
    circle: boolean
    autofocus: boolean
    disabled: boolean

}
withDefaults(defineProps<Props>(), {
    plain: false,
    nativeType: 'button'
})

const handleClick = () => {

}

</script>
<style></style>

<style scoped lang="scss">
.c-button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    line-height: 1;
    height: 32px;
    white-space: nowrap;
    cursor: pointer;
    color: var(--el-button-text-color);
    text-align: center;
    box-sizing: border-box;
    outline: none;
    transition: .1s;
    font-weight: bold;
    user-select: none;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #dcdfe6;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: #606266;
    position: relative;

    &:hover {
        color: #409eff;
        border-color: #c6e2ff;
        background-color: #ecf5ff;
        outline: none;
    }

    &:active {
        border-color: #409eff;
    }
}

.c-button--primary {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    outline-color: #a0cfff;

    &:hover {
        color: #fff;
        border-color: #79bbff;
        background-color: #79bbff;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #337ecc;
        background-color: #337ecc;
        outline: none;
    }
}

.c-button--success {
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    outline-color: #b3e19d;

    &:hover {
        color: #fff;
        border-color: #95d475;
        background-color: #95d475;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #529b2e;
        background-color: #529b2e;
        outline: none;
    }
}

.c-button--info {
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    outline-color: #c8c9cc;

    &:hover {
        color: #fff;
        border-color: #b1b3b8;
        background-color: #b1b3b8;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #73767a;
        background-color: #73767a;
        outline: none;
    }
}

.c-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    outline-color: #f3d19e;

    &:hover {
        color: #fff;
        border-color: #eebe77;
        background-color: #eebe77;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #b88230;
        background-color: #b88230;
        outline: none;
    }
}

.c-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    outline-color: #fab6b6;

    &:hover {
        color: #fff;
        border-color: #f89898;
        background-color: #f89898;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #c45656;
        background-color: #c45656;
        outline: none;
    }
}



// plain
.is-plain {
    &:hover {
        color: #409eff;
        background-color: #ffffff;
        border-color: #409eff;
    }

}

.c-button--primary.is-plain {
    color: #409eff;
    background-color: #ecf5ff;
    border-color: #a0cfff;

    &:hover {
        color: #fff;
        border-color: #409eff;
        background-color: #409eff;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #337ecc;
        background-color: #337ecc;
        outline: none;
    }
}

.c-button--success.is-plain {
    color: #67c23a;
    background-color: #f0f9eb;
    border-color: #b3e19d;

    &:hover {
        color: #fff;
        border-color: #67c23a;
        background-color: #67c23a;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #529b2e;
        background-color: #529b2e;
        outline: none;
    }
}

.c-button--info.is-plain {
    color: #909399;
    background-color: #f4f4f5;
    border-color: #c8c9cc;

    &:hover {
        color: #fff;
        border-color: #909399;
        background-color: #909399;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #73767a;
        background-color: #73767a;
        outline: none;
    }
}

.c-button--warning.is-plain {
    color: #e6a23c;
    background-color: #fdf6ec;
    border-color: #f3d19e;

    &:hover {
        color: #fff;
        border-color: #e6a23c;
        background-color: #e6a23c;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #b88230;
        background-color: #b88230;
        outline: none;
    }
}

.c-button--danger.is-plain {
    color: #f56c6c;
    background-color: #fef0f0;
    border-color: #fab6b6;

    &:hover {
        color: #fff;
        border-color: #f56c6c;
        background-color: #f56c6c;
        outline: none;
    }

    &:active {
        color: #FFF;
        border-color: #c45656;
        background-color: #c45656;
        outline: none;
    }
}


.is-round {
    border-radius: 20px;
}

.is-circle {
    width: 32px;
    border-radius: 50%;
    padding: 6px;
    overflow: hidden;

    svg {
        width: 14px;
        height: 14px;
    }
}


// 禁用
.c-button.is-disabled {
    opacity: 0.8;
    cursor: not-allowed;
}
</style>