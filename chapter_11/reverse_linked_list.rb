# Write a method that reverses a linked list.

class Node

  attr_accessor :data, :next_node

  def initialize(data)
    @data = data
  end

end

class LinkedList

  attr_accessor :first_node
  
  def initialize(first_node)
    @first_node = first_node
  end

  # reverse linked list method
  def reverse_list
    current_node = @first_node
    previous_node = nil

    while current_node do
      new_current_node = current_node.next_node
      current_node.next_node = previous_node
      previous_node = current_node
      current_node = new_current_node
    end

    @first_node = previous_node
  end

end