import React from "react"
import { Flex, Image, Box, Text, Heading, Tag } from "@chakra-ui/core"
import { Link } from "@reach/router"
import gql from "graphql-tag.macro"
import { CourseItemFragment, MentorItemFragmentDoc } from "../lib/graphql"
import { styled } from "./providers/ThemeProvider"

export const MENTOR_ITEM = gql`
  fragment MentorItem on User {
    id
    fullName
    avatar
    bio
  }
`
export const COURSE_ITEM = gql`
  fragment CourseItem on Course {
    id
    name
    cover
    category
    description
    slug
    fullDescription
    duration
    benefits
    rewardType
    isPublished
    petId
    mentor {
      ...MentorItem
    }
  }
  ${MentorItemFragmentDoc}
`

interface Props {
  link: string
  cover: string
  category: string
  name: string
  description: string
  directToAdmin?: boolean
}

export function CourseItem(props: Props) {
  return (
    <Link
      to={
        `/${props.link}`
      }
    >
      <StyledCourseItem borderRadius="lg">
        <Box w="100%" h={{ base: 130, lg: 150 }} bg="gray.100" rounded="lg">
          <StyledCover rounded="lg" src={props.cover || ""} />
        </Box>

        <Flex
          p={4}
          align="flex-start"
          justify="center"
          direction="column"
          rounded="lg"
        >
          <Heading
            fontWeight={{ base: "semibold", md: "normal" }}
            fontSize={{ sm: "xl", md: "2xl" }}
          >
            {props.name}
          </Heading>
          <Text fontSize="md" color="gray.400">
            {props.description}
          </Text>
        </Flex>
      </StyledCourseItem>
    </Link>
  )
}

const StyledCourseItem = styled(Flex)`
  flex-direction: column;
  cursor: pointer;

  &:hover {
    transform: scale(1.005);
  }
`

const StyledCover = styled(Image)`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
