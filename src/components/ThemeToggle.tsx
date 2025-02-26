'use client'

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { Button } from "./ui/Button"
import { SunOutlined, MoonOutlined } from "@ant-design/icons"
import React from "react"

type TToogleThemeProps = {
    label: string
}

export function ThemeToggle({label}: TToogleThemeProps) {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            variant="ghost"
        >
            <span>{label}</span>
            {resolvedTheme === "dark" ? <SunOutlined /> : <MoonOutlined />}
        </Button>
    )
}
